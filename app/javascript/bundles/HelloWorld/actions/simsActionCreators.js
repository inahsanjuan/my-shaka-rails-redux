/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED } from '../constants';

export const fetchTodos = () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/todos");
  return (dispatch) => {
    request.then(response => {
      dispatch({
        type: FETCH_TODOS,
        payload: response.data
      })
    })
  };
};

// export function fetchTodos(todos) {
//   return {
//     type: FETCH_TODO,
//     todos
//   }
// };

// const fetchTodosPending = (bool) => {
// 	type: FETCH_TODOS,
// 	payload: bool
// }

// export const fetchTodosSuccess = (data) => {
// 	return {
// 		type: FETCH_TODOS_SUCCESS,
// 		payload: data,
// 		loading: false
// 	}
// }

// export const fetchTodosFailed = (error) => {
//     //Return a action type and a payload with a error
//     return {
//         type: FETCH_TODOS_FAILED,
//         payload: error,
//         loading: false,
//     };
// }

// export const fetchTodosSuccess = (bool) => {
//   const request = axios.get("https://jsonplaceholder.typicode.com/todos");

//   return (dispatch) => {
//     return request.then(({data}) => {
//         dispatch(fetchTodos(data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };