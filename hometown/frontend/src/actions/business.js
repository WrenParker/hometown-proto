import axios from 'axios';

import { GET_BUSINESS } from './types';

export const getBusiness = () => dispatch => {
  axios.get("api/business/")
    .then(res => {
      dispatch({
        type: GET_BUSINESS,
        payload: res.data
      });
    }).catch(err => console.log(err));
}