import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Greetings, I am a recent graduate from the School of Computer Science at XIM University. Currently, I am engaged in a Sponsored Research Fellowship at BITS Pilani, Goa Campus. I extend a warm welcome to you as you peruse my portfolio. My primary area of specialization lies within the field of Data Science, where I have dedicated significant time and effort to honing my expertise. I am excited to showcase the depth of my knowledge and the breadth of my experience in this dynamic field. Thank you for taking the time to explore my portfolio; I trust it will offer valuable insights into my accomplishments. Here is my <a href='https://teal-samaria-7.tiiny.site'> Resume.</a>
        </SectionText>
       
        <Button onClick={props.handleClick}> ~ Debanshu Das </Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;