---
title: Normalizing API Responses
date: 2019-03-28
published: true
description: Using javascript symbols, getters, setters, and toJSON to control API response structure.
tags: javascript, express, serialization, node
---

[Express.js](https://expressjs.com) has been my goto framework for building an API in node. One of the problems I commonly run into is that with enough freedom, each api response tends to take on it's own shape. This creates a weird code smell when each remote call has to think about how to consume each response.

> Note: All examples are using [express v4](https://www.npmjs.com/package/express) and [body-parser](https://www.npmjs.com/package/body-parser).

```js
const todos = [{ ... }, { ... }]; // an array of todos

router.get('/todos', function(req, res, next){
    res.status(200);
    res.json({
        msg: 'So many things to do',
        todos: todos,
    });
});

router.post('/todos', function(req, res, next){
    const todo = {
        title: req.body.title,
        description: req.body.description,
        completed: false,
        id: uuid(), // generate a random id,
    };
    try {
        todos.push(todo); // imagine this might fail, todo is a remote db :)
    } catch (e) {
        return next(e);
    }
    res.status(201);
    res.json({
        message: 'Todo created',
        data: todo,
    });
});
```

Above you can see that each endpoint has it's own structure for the response given a very similar anatomy. Both are sending back a message and a data set, but with different keys. This problem becomes even more evident when you start throwing errors into the mix.

## Normalizing the API response

We can fix this problem by creating a function that returns an object. For simplicity, this object will have 4 key value pairs

* data - The main data, defaults to an object be can be any type
* status - Was the request successful, 1 is OK, 0 is BAD
* errors - An array of errors generated in processing
* message - A user friendly message of what happened

```js
function apiResponse(data = {}, status = 1, errors = [], message = '') {
    return {
        data,
        status,
        errors,
        message,
    };
}
```

Thats a good start, but your fellow developer has to think about which order the parameters are in. Lets fix that by accepting a object as a parameter and destructuring the keys we need out of it.

```js
function apiResponse({ data = {}, status = 1, errors = [], message = '' }) {
    return {
        data,
        status,
        errors,
        message,
    };
}
```

While that solution works, it doesn't protect us from mistakes. After initialization, the integrity of the object structure is at risk. Lets turn apiResponse into a class so we can gain more control.

```js
class ApiResponse {
    constructor({ data = {}, status = 1, errors = [], message = '' }) {
        this._data = data;
        this._status = status;
        this._errors = errors;
        this._message = message;
    }
}
```

Under the hood, `res.json()` will call `JSON.stringify()` on the payload to encode it. One of the cool side affects of `stringify` is that if an object has a [toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior) property whose value is a function, that function will be called to define how the object is serialized. This means we can pick which keys show up in the JSON string.

```js
class ApiResponse {
    constructor({ data = {}, status = 1, errors = [], message = '' }) {
        this._data = data;
        this._status = status;
        this._errors = errors;
        this._message = message;
    }
    toJSON() {
        return {
            data: this._data,
            status: this._status,
            errors: this._errors,
            message: this._message,
        };
    }
}
```

Unfortunately, javascript classes don't have private keys. The closest thing we have is `Symbols`. Lets use those to make our keys "private".

```js
const apiResponse = (payload = {}) => {

    const DataSymbol = Symbol('data');
    const StatusSymbol = Symbol('status');
    const ErrorsSymbol = Symbol('errors');
    const MessageSymbol = Symbol('message');

    class ApiResponse {
        constructor({ data = {}, status = 1, errors = [], message = '' }) {
            this[DataSymbol] = data;
            this[StatusSymbol] = status;
            this[ErrorsSymbol] = errors;
            this[MessageSymbol] = message;
        }
        toJSON() {
            return {
                data: this[DataSymbol],
                status: this[StatusSymbol],
                errors: this[ErrorsSymbol],
                message: this[MessageSymbol],
            }
        }
    }

    return new ApiResponse(payload);

}
```

Javascript also doesn't have types, but we do have `getters` and `setters`. We can use those to do type checking on assignment. This is our final evolution of the code.

```js
const apiResponse = (payload = {}) => {

    const DataSymbol = Symbol('data');
    const StatusSymbol = Symbol('status');
    const ErrorsSymbol = Symbol('errors');
    const MessageSymbol = Symbol('message');

    class ApiResponse {
        constructor({ data = {}, status = 1, errors = [], message = '' }) {
            this.data = data;
            this.status = status;
            this.errors = errors;
            this.message = message;
        }

        get data() {
          return this[DataSymbol];
        }

        set data(data) {
          if (typeof data === 'undefined')
              throw new Error('Data must be defined');
          this[DataSymbol] = data;
        }

        get status() {
          return this[StatusSymbol];
        }

        set status(status) {
          if (isNaN(status) || (status !== 0 && status !== 1))
            throw new Error('Status must be a number, 1 is OK, 0 is BAD');
          this[StatusSymbol] = status;
        }

        get errors() {
          return this[ErrorsSymbol];
        }

        set errors(errors) {
          if (!Array.isArray(errors))
            throw new Error('Errors must be an array');
          this[ErrorsSymbol] = errors;
        }

        get message() {
          return this[MessageSymbol];
        }

        set message(message) {
          if (typeof message !== 'string')
            throw new Error('Message must be a string');
          this[MessageSymbol] = message;
        }

        toJSON() {
            return {
                data: this.data,
                status: this.status,
                errors: this.errors.map(e => e.stack ? e.stack : e),
                message: this.message,
            }
        }
    }

    return new ApiResponse(payload);

}
```

The getters and setters also give us the ability to safely mutate a response object after initialization. Now comes the fun part, using our new `apiResponse` function 🎉!

```js
const todos = [{ ... }, { ... }]; // an array of todos

router.get('/todos', function(req, res, next){
    res.status(200);
    res.json(apiResponse({
        data: todos,
        message: 'You have a lot todo!',
    }));
});
```

**Expected Response from GET /todos**
```json
{
   "data": [{ ... }, { ... }],
   "message": "You have a lot todo!",
   "errors": [],
   "status": 1,
}
```

That is all for now. This is my first post and would love to hear your feedback. Hopefully this is helpful to someone. Happy Coding!