import React from 'react';
import { DiAppcelerator, DiCoda, DiCode, DiCodeBadge, DiDatabase, DiDjango, DiFirebase, DiMaterializecss, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Through my coursework, I have gained extensive knowledge working with a diverse range of technologies, particularly in the field of data science. This has allowed me to develop a comprehensive skill set that empowers me to drive innovation. I possess capability in various areas within data science, enabling me to effectively analyze and extract valuable insights from complex datasets. I am adept at utilizing cutting-edge tools and techniques to derive meaningful conclusions and make informed decisions.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Python for ML and DL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMaterializecss size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NLP</ListTitle>
          <ListParagraph>
            Experience with <br />
            NLTK, SpaCy, Gensim.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Analysis</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pandas, NumPy, SQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
