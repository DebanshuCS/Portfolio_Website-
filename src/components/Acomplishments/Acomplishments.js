import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Google Data Analytics Professional Certificate', },
  {  text: 'Pro-Degree Data Science Certification, Verzeo', },
  {  text: 'Building Video AI Applications at the Edge on Jetson Nano, NVIDIA'},
  {  text: 'LoR and Certificate of Competency in Ethical Hacking, MyCaptain'}, 
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
