// Vendor Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// Custom Import
import PageWrapper from './PageWrapper';
import SectionHeader from './SectionHeader';

const BlogHighlightContact = ({ postData, blogRef, contactRef }) => (
  <PageWrapper>
    <BlogHighlightContactContainer>
      <BlogHighlight>
        <SectionHeader ref={ blogRef }>
          My Blog
        </SectionHeader>
        <PostTitleDate>
          { postData.frontmatter.title }<br />
          <span>- Posted: { postData.frontmatter.date } -</span>
        </PostTitleDate>
        <PostExcerpt>
          { postData.excerpt }
          <ReadMore />
        </PostExcerpt>
      </BlogHighlight>
      <ContactForm contactRef={ contactRef } />
    </BlogHighlightContactContainer>
  </PageWrapper>
);

export default BlogHighlightContact;

const BlogHighlightContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
  width: 100%;
  margin-bottom: 10rem;
  ${ ({ theme }) => theme.medium`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  ` }
`;

const BlogHighlight = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${ ({ theme }) => theme.medium`
    max-width: 50rem;
    margin-top: 2rem;
    margin-bottom: 10rem;
  ` }
`;

const PostTitleDate = styled.h5`
  font-size: 3rem;
  color: ${ ({ theme }) => theme.black };
  font-family: ${ ({ theme }) => theme.typeFont };
  margin: 0;
  > span {
    color: ${ ({ theme }) => theme.greenblue };
    opacity: 0.7;
    font-size: 2rem;
    display: block;
    text-align: center;
  }
`;

const PostExcerpt = styled.p`
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${ ({ theme }) => theme.black };
  font-family: ${ ({ theme }) => theme.typeFont };
  padding: 0 1.5rem;
  ${ ({ theme }) => theme.medium`
    padding: 0;
  ` }
`;

const ReadMore = styled.a.attrs({
  children: 'Read More'
})`
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${ ({ theme }) => theme.teal };
  font-family: ${ ({ theme }) => theme.typeFont };
  text-decoration: none;
  font-weight: 700;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  cursor: pointer;
`;

class ContactForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render () {
    return (
      <ContactFormContainer>
        <SectionHeader ref={ this.props.contactRef }>Contact Me</SectionHeader>
        <ContactFrom>
          <Label>Email Address</Label>
          <TextInput
            placeholder='Email Address'
          />
          <Label>Phone Number</Label>
          <TextInput
            placeholder='Phone Number'
          />
          <Label>Message</Label>
          <MessageBody
            placeholder='Type your message here...'
          />
          <SubmitButton>Submit</SubmitButton>
        </ContactFrom>
      </ContactFormContainer>
    );
  }
}

const ContactFormContainer = styled.div`
  width: 100%;
  max-width: 50%;
  ${ ({ theme }) => theme.medium`
    max-width: 50rem;
  ` }
`;

const ContactFrom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: block;
  font-size: 2rem;
  font-family: ${ ({ theme }) => theme.typeFont };
  color: ${ ({ theme }) => theme.black };
  width: 100%;
`;

const TextInput = styled.input`
  display: block;
  width: 100%;
  font-size: 2rem;
  background-color: ${ ({ theme }) => theme.black }
  font-family: ${ ({ theme }) => theme.typeFont };
  color: ${ ({ theme }) => theme.white };
  padding: 0.7rem;
  border: 4px solid ${ ({ theme }) => theme.greenblue };
  margin-bottom: 1rem;
  &:focus {
    outline: 0;
    border-color: ${ ({ theme }) => theme.teal }
  }
`;

const MessageBody = styled.textarea`
  display: block;
  width: 100%;
  font-size: 2rem;
  background-color: ${ ({ theme }) => theme.black }
  font-family: ${ ({ theme }) => theme.typeFont };
  color: ${ ({ theme }) => theme.white };
  padding: 0.5rem 0.5rem 0 0.5rem;
  border: 4px solid ${ ({ theme }) => theme.greenblue };
  margin-bottom: 1rem;
  &:focus {
    outline: 0;
    border-color: ${ ({ theme }) => theme.teal }
  }
`;

const SubmitButton = styled.button`
  border: 2px solid ${ ({ theme }) => theme.black };
  font-size: 2rem;
  background-color: ${ ({ theme }) => theme.greyblue }
  font-family: ${ ({ theme }) => theme.typeFont };
  color: ${ ({ theme }) => theme.white };
  font-weight: 700;
  padding-top: 0.5rem;
  width: 50%;
  margin-left: auto;
  cursor: pointer;
`;
