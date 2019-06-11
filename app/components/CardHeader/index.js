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
import { Link } from 'react-router-dom';
import Container from './Container';
import Items from './Item';
import Section from './Section';
import messages from './messages';
import logo from './logo.png';

const CardHeader = () => (
  <Container>
    <Link to="/">
      <img
        alt="Navid Ful Stack Developer"
        style={{ marginTop: 30, marginRight: '10em' }}
        src={logo}
      />
    </Link>
    <Link style={{ width: '10%' }} to="/">
      <Items>
        <FontAwesomeIcon icon={faUserAstronaut} />
        <Section>
          <FormattedMessage {...messages.profile} />
        </Section>
      </Items>
    </Link>
    <Link style={{ width: '10%' }} to="/resume">
      <Items>
        <FontAwesomeIcon icon={faFileAlt} />
        <Section>
          <FormattedMessage {...messages.resume} />
        </Section>
      </Items>
    </Link>
    <Link style={{ width: '10%' }} to="/services">
      <Items>
        <FontAwesomeIcon icon={faLayerGroup} />
        <Section>
          <FormattedMessage {...messages.services} />
        </Section>
      </Items>
    </Link>
    <Link style={{ width: '10%' }} to="/portfolio">
      <Items>
        <FontAwesomeIcon icon={faImages} />
        <Section>
          <FormattedMessage {...messages.portfolio} />
        </Section>
      </Items>
    </Link>
    <Link style={{ width: '10%' }} to="/testimonial">
      <Items>
        <FontAwesomeIcon icon={faUsers} />
        <Section>
          <FormattedMessage {...messages.testimonial} />
        </Section>
      </Items>
    </Link>
    <Link style={{ width: '10%' }} to="/contact">
      <Items>
        <FontAwesomeIcon icon={faComments} />
        <Section>
          <FormattedMessage {...messages.contact} />
        </Section>
      </Items>
    </Link>
  </Container>
);

export default CardHeader;
