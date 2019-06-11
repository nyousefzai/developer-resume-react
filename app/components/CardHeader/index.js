import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faFileAlt,
  faLayerGroup,
  faImages,
  faUsers,
  faComments,
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
        <FormattedMessage {...messages.profile} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faFileAlt} />
      <Section>
        <FormattedMessage {...messages.resume} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faLayerGroup} />
      <Section>
        <FormattedMessage {...messages.services} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faImages} />
      <Section>
        <FormattedMessage {...messages.portfolio} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faUsers} />
      <Section>
        <FormattedMessage {...messages.testimonial} />
      </Section>
    </Items>
    <Items>
      <FontAwesomeIcon icon={faComments} />
      <Section>
        <FormattedMessage {...messages.contact} />
      </Section>
    </Items>
  </Container>
);

export default CardHeader;
