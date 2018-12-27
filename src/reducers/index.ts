
import { VisibilityFilters, actiontypes } from '../actions';
import { store } from '../store';


//Initial state. Visibility filter not implemted will work in  update

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}


/*
* Root reducer takin in the state and action. Firstly taking initial state
*/



 const TodoReducer = (state = initialState, action) => {

  switch (action.type) {

    case actiontypes.ADD_TODO:
    console.log(state);
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
          	id:action.id,
            name: action.name,
            completed: false
          }
        ]
      })
     case actiontypes.TOGGLE_TODO:
		let newState = Object.assign({}, state);
		console.log(action.id);
		// console.log(newState.todos.map(todo => todo.id === action.id ? (todo.completed = true ) : todo ));
		newState.todos.map(todo => todo.id === action.id ? (  todo.completed = !todo.completed ) : todo );
      return Object.assign({}, state, newState)
    default:
    console.log(state);
      return state;
  }
};

export default TodoReducer;