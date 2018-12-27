
import { VisibilityFilters, actiontypes } from '../actions';
import { store } from '../store';



// import { actionTypes } from '../actions/actionTypes';
// import { TodoItem } from '../models';

// export const membersReducer = (state: MemberEntity[] = [], action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_TODOS:
//       return handleFetchMembersCompleted(state, action.payload);
//   }

//   return state;
// };

// const handleFetchMembersCompleted = (state: MemberEntity[], payload: MemberEntity[]) => {
//   return payload;
// };

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}


// function todoView(state = initialState, action) {
//   switch (action.type) {
//     case actiontypes.SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     default:
//       return state
//   }
// }

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