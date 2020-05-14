import { GET_BUSINESS } from '../actions/types.js';

const initialState = {
  business: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BUSINESS:
      return {
        ...state,
        business: action.payload
      }
    default:
      return state;
  }
}