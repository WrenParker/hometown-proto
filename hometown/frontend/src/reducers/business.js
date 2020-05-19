import { GET_BUSINESS, SELECT_BUSINESS } from '../actions/types.js';

const initialState = {
  business: [],
  selectBusiness: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BUSINESS:
      return {
        ...state,
        business: action.payload
      }
    case SELECT_BUSINESS:
      return{
        ...state,
        selectBusiness: action.payload
      }
    default:
      return state;
  }
}