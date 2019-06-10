import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faFileAlt,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import Items from './Item';
import Section from './Section';
import messages from './messages';

const CardHeader = () => (
  <Container>
    <Items>
      <FontAwesomeIcon icon={faUserAstronaut} />
      <Section>
        <FormattedMessage {...messages.headerItems} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faFileAlt} />
      <Section>
        <FormattedMessage {...messages.headerItems} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faLayerGroup} />
      <Section>
        <FormattedMessage {...messages.headerItems} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faUserAstronaut} />
      <Section>
        <FormattedMessage {...messages.headerItems} />
      </Section>
    </Items>
  </Container>
);

export default CardHeader;
