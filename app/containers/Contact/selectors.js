import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContactDomain = state => state.contact || initialState;

const makeSelectContact = () =>
  createSelector(
    selectContactDomain,
    substate => substate,
  );

export default makeSelectContact;
export { selectContactDomain };
