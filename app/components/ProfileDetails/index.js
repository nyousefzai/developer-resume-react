import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Container from './container';
import Headline from './Headline';
import messages from './messages';
import IconsWrapper from './IconsWrapper';
import InnerWapper from './InnerWapper';

const ProfileDetails = () => (
  <Container>
    <Headline outline="0 0 5px 0" spacing="0">
      <FormattedMessage {...messages.headline} />
    </Headline>
    <Headline outline="0 0 10px 0" size="12px">
      <FormattedMessage {...messages.underHeadline} />
    </Headline>
    <IconsWrapper>
      <InnerWapper>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </InnerWapper>
      <FormattedMessage {...messages.address} />
    </IconsWrapper>
    <IconsWrapper>
      <InnerWapper>
        <FontAwesomeIcon icon={faPhoneVolume} />
      </InnerWapper>
      <FormattedMessage {...messages.contact} />
    </IconsWrapper>
    <IconsWrapper>
      <InnerWapper>
        <FontAwesomeIcon icon={faEnvelope} />
      </InnerWapper>
      <FormattedMessage {...messages.email} />
    </IconsWrapper>
    <Headline outline="15px  0 10px 0" font="inhert">
      <FormattedMessage {...messages.line} />
    </Headline>
    <IconsWrapper>
      <Headline spacing="0" outline="0 0 10px 0" size="14px">
        <FormattedMessage {...messages.objective} />
      </Headline>
    </IconsWrapper>
  </Container>
);

export default ProfileDetails;
