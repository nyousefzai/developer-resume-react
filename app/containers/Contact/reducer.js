import produce from 'immer';
import { FORM_VAUES } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const contactReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FORM_VAUES:
        break;
    }
  });

export default contactReducer;
