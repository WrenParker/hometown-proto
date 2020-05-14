import axios from 'axios';

import { GET_LEADS } from './types';

export const getBusiness = () => dispatch => {
  axios.get("api/business/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    }).catch(err => console.log(err));
}