// Vendor Imports
import React, { Fragment } from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';

// Custom Import
import PageWrapper from './PageWrapper';

const SiteHero = ({ menuIsOpen }) => (
  <Fragment>
    <Hero src={ withPrefix('/images/site_hero.png') } isOpen={ menuIsOpen } />
    <PageWrapper>
      <UniqueSellingProposition>
        My name is <Accent>Matthew Greenberg</Accent>, but everyone calls me <Accent>Matt</Accent>
        for short. I am a passionate <Accent>UI / UX developer</Accent> with a vast knowledge
        of the most popular frameworks and toolkits centered around <Accent>javascript</Accent>.
      </UniqueSellingProposition>
    </PageWrapper>
  </Fragment>
);

export default SiteHero;

const Hero = styled.img`
  display: block;
  width: 100%;
  max-width: ${ ({ theme }) => theme.siteMaxWidth };
  margin: 4rem auto 4rem auto;
  transition: padding 0.2s;
  ${ ({ theme }) => theme.medium`
    margin-top: 8rem;
    max-width: 50rem;
  ` }
  ${ ({ isOpen, theme }) => {
    if (isOpen) {
      return theme.medium`
        padding-top: 25rem;
        transition: padding 0.2s;
      `;
    }
  } }
`;

const UniqueSellingProposition = styled.p`
  font-size: 2rem;
  font-family: ${ ({ theme }) => theme.typeFont };
  text-align: center;
  line-height: 2.6rem;
  padding: 0 3rem;
  margin-bottom: 10rem;
  ${ ({ theme }) => theme.medium`
    margin-top: 8rem;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  ` }
`;

const Accent = styled.span`
  font-family: ${ ({ theme }) => theme.accentFont };
  padding: 0.2rem;
`;
