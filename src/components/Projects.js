// Vendor Imports
import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

// Custom Imports
import PageWrapper from './PageWrapper';
import SectionHeader from './SectionHeader';

const Projects = React.forwardRef((props, ref) => (
  <PageWrapper>
    <SectionHeader ref={ ref }>Projects</SectionHeader>
    <FlexProjectsContainer>
      <ProjectCard src={ withPrefix('/images/doggos&puppers.png') } alt='Doggos & Puppers Logo'>
        Responsive Website<br />
        <Accent>Front-End</Accent>
      </ProjectCard>
      <ProjectCard
        src={ withPrefix('/images/moolahlah.png') }
        alt='Moolahlah Budget App Logo'
        href='http://moolahlah.com'
      >
        Fullstack Budget Web App<br />
        <Accent>React / Redux</Accent>
      </ProjectCard>
      <ProjectCard src={ withPrefix('/images/coursebutler.png') } alt='Course Buttler Logo'>
        Mobile & Wearable Golf Assistant<br />
        Product Design
      </ProjectCard>
      <ProjectCard src={ withPrefix('/images/kellinlogo.png') } alt='Kellin Communications Logo'>
        Internet Service Provider Website<br />
        Built with <Accent>PHP</Accent>
      </ProjectCard>
      <ProjectCard src={ withPrefix('/images/nodecast.png') } alt='Node Cast Logo'>
        5 day Weather App<br />
        Built with <Accent>node.js</Accent>
      </ProjectCard>
    </FlexProjectsContainer>
  </PageWrapper>
));

export default Projects;

const FlexProjectsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10rem;
`;

const ProjectCard = ({ src, alt, children, href = '#' }) => (
  <ProjectCardContainer href={ href }>
    <ProjectImage
      src={ src }
      alt={ alt }
    />
    <ProjectText>
      { children }
    </ProjectText>
  </ProjectCardContainer>
);

const ProjectCardContainer = styled.a`
  border-bottom: 0.5rem solid ${ ({ theme }) => theme.teal };
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${ ({ theme }) => theme.medium`
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    width: 100%;
    border-bottom: 0;
  ` }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 28rem;
`;

const ProjectText = styled.p`
  display: block;
  text-align: center;
  font-family: ${ ({ theme }) => theme.typeFont };
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${ ({ theme }) => theme.black };
  ${ ({ theme }) => theme.medium`
    margin-bottom: 0;
  ` }
`;

const Accent = styled.span`
  font-family: ${ ({ theme }) => theme.accentFont };
  padding: 0.2rem;
`;
