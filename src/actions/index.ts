
import { TodoItem } from '../models';
import  { store } from '../store';

/*
 * action types
 */

export const actiontypes = {
ADD_TODO :'ADD_TODO',
TOGGLE_TODO : 'TOGGLE_TODO',
 SET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER',
}

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}



export function addTodo (text) {
	// console.log(todo);
	let lastId: number = store.getState().todos.length;
  return {
     type: actiontypes.ADD_TODO,
     id:lastId,
     name: text
   }
}

export function toggleTodo(id) {
     console.log(id);
  return {
     type: actiontypes.TOGGLE_TODO,
     id:id,
   }
}

