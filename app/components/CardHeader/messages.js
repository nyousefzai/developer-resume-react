import { defineMessages } from 'react-intl';
export const scope = 'app.containers.HomePage';
export default defineMessages({
  profile: {
    id: `${scope}.header`,
    defaultMessage: 'Profile',
  },
  resume: {
    id: ` ${scope}.header`,
    defaultMessage: 'Resume',
  },
  services: {
    id: ` ${scope}.header`,
    defaultMessage: 'Services',
  },
  portfolio: {
    id: ` ${scope}.header`,
    defaultMessage: 'Portfolio',
  },
  testimonial: {
    id: ` ${scope}.header`,
    defaultMessage: 'Testimonial',
  },
  contact: {
    id: ` ${scope}.header`,
    defaultMessage: 'Contact',
  },
});
