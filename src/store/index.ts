import { createStore } from 'redux';
import TodoReducer from '../reducers';
import { TodoItem } from '../models';


// const initialState = {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//     id:1,	
//       name: 'Consider using Redux',
//       completed: true
//     },
//     {
//     	id:2,
//       name: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }
export const store = createStore(TodoReducer);