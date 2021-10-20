import {all,fork} from 'redux-saga/effects'
import axios from 'axios'
import userSaga from './user'

/*

    all : 함수를 여러개 사용할 떄 사용한다. 인자값은 배열ㄺ
    fork : 함수를 하나만 실행 
    take: action값 에 따라 함수를 호출 
    takeLatest : action값 type에 따라 함수를 호출, 중복되는 액션이 다발적으로 발생되었을 때 맨 마지막 꺼 하나만 실행
    put:action 값을 실행시킴 == dispatch를 실행시킴.
    */


/*

  fetch axios 요청을 보냄 . Back-end server에 
  Back-end server 결과값을 받은 다음에 
  결과 값에 따른 action을 내보냅니다.

*/

// 제네레이터

// function* testAction(action){ 
//   console.log(action)

//   const result =yield call (axios.post,'http://loacalhost:3000 /api/login,action.data')
//   console.log(result)

//   const {data} = result 

//   if(data.result === 'OK'){ 
//       yield put({
//         type:'USER_LOGIN_SUCCESS',
//       })
//   }else{ 
//     yield put({ 
//       type:'USER_LOGIN_FAIL'
//     })
//   }
  
// }


// function* test(){ 
//   yield takeLatest('USER_LOGIN_REQUEST',testAction)
// }



export default function* rootSaga(){ 
  yield all([
    fork(userSaga)
    
  ])
}

