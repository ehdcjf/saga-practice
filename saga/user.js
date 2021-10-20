import axios from 'axios';
import {all,takeLatest,fork} from 'react-saga/effects';

function loginAPI(data){
  return axios.post('http://localhost:3000/api/')
}




export default function* userSaga(){ 
  yield all([

  ])
}