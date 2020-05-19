import axios from 'axios';

import { GET_BUSINESS, SELECT_BUSINESS } from './types';

export const getBusiness = () => dispatch => {
  axios.get("api/business/")
    .then(res => {
      dispatch({
        type: GET_BUSINESS,
        payload: res.data
      });
    }).catch(err => console.log(err));
}

export const selectBusiness = (business) => dispatch => {
  dispatch({
    type: SELECT_BUSINESS,
    payload: business
  })
}