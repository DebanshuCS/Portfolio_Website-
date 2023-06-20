import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Google Data Analytics Professional Certificate'},
  {  text: 'Verzeo-Microsoft, Pro Degree Data Science Certification'},
  {  text: 'Building Video AI Applications at the Edge on Jetson Nano, NVIDIA'},
  {  text: 'Certified Ethical Hacking Competency Credential from MyCaptain'}, 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certified Expertise</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
         
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
