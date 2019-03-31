// Vendor Imports
import React from 'react';
import styled from 'styled-components';

// Custom Imports
import SectionHeader from './SectionHeader';
import PageWrapper from './PageWrapper';

const AboutMe = React.forwardRef((props, ref) => (
  <PageWrapper>
    <SectionHeader ref={ ref }>About Me</SectionHeader>
    <AboutMeFlexContainer>
      <VanityPhoto src='' alt='Photo Of Matthew Greenberg' />
      <AboutMeContent>
        { /* eslint max-len: 0 */ }
        I began focusing on becoming a professional software developer in 2012 after realizing that I could combine my desire to create, with my love for computers. Given my prowess for problem solving, i found myself enjoying the challenge and the work. I spent all my time learning as much information as I could, but I still needed some professional guidence. In 2015, I started pursuing a Bachelors of Science in Web Design & Development from Full Sail University in Orlando, Florida. I recently finished my degree and have been working as a full stack developer for the non profit 'Focus on The Family' for about one and half years. I have been able to work on some really interesting products and look forward to what the rest of my career has in store for me. When I’m not coding, I am hanging out of my genius dog named Zeke. I am also a follower of Jesus Christ, a brother to 3 sisters, and a son to my marvelous mother.
      </AboutMeContent>
    </AboutMeFlexContainer>
  </PageWrapper>
));

export default AboutMe;

const AboutMeFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rem;
  ${ ({ theme }) => theme.medium`
    flex-direction: column;
  ` }
`;

const VanityPhoto = styled.img`
  width: 35%;
  height: 25rem;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: ${ ({ theme }) => theme.black };
  border-bottom: 0.5rem solid ${ ({ theme }) => theme.teal };
  color: ${ ({ theme }) => theme.white };
  font-family: ${ ({ theme }) => theme.typeFont };
  margin-right: 5%;
  ${ ({ theme }) => theme.medium`
    margin-right: 0;
    margin-top: 1rem;
    width: 100%;
    max-width: 40rem;
  ` }
`;

const AboutMeContent = styled.p`
  font-family: ${ ({ theme }) => theme.typeFont };
  font-size: 2rem;
  color: ${ ({ theme }) => theme.black };
  width: 60%;
  line-height: 2.6rem;
  padding: 1rem;
  ${ ({ theme }) => theme.medium`
    width: 100%;
    max-width: 50rem;
  ` }
`;
