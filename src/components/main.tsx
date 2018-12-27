import * as React from 'react';
import { AddTodoBar } from './addTodoBar';
import { TodoRow } from './todo';
import { TodoItem } from '../models';
import * as toastr from 'toastr';
import  { store } from '../store';
import { addTodo, toggleTodo } from  '../actions';
import  'jquery';




// export const Main = () => (
//     <div className="container">
//         <div className="inner-container"> 
//             <AddTodoBar onClick={}/>
//         </div>
//     </div>
// );




interface State {
    value: string;
    todos: TodoItem[];
}



export class Main extends React.Component < {}, State > {

    constructor(props) {
        super(props);
        this.state = { value: '', todos:store.getState().todos};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);

    }

    handleInputChange(value) {
        this.setState({ value });
    }

    onSave = e => {
        e.preventDefault();
        
        // let item: TodoItem = {
        //     id: lastId,
        //     name: this.state.value,
        //     completed: false,
        // };
        // let todos: TodoItem[] = this.state.todos;
        // console.log(todos);
        // todos.push(item);
        // this.setState({ todos });
  
        store.dispatch(addTodo(this.state.value));
        this.setState({todos: store.getState().todos});
        console.log(store.getState().todos);
        console.log(this.state.value);

        // toastr.options.positionClass = "toast-top-center";
        // toastr.success('New todo item added');

    }

        toggleTodo(e) {
             
          let id:number = parseInt(e.currentTarget.getAttribute('data-key'));
         console.log(e.currentTarget);
          store.dispatch(toggleTodo(id));
           this.setState({todos: store.getState().todos}); 
            // e.currentTarget.setAttribute('data-completed',true);
          

         
         //  e.currentTarget.setAttribute('data-completed',true);
         //  e.currentTarget.setAttribute('data-completed',true);
         // store.getState().todos.map(todo => todo.id === id  && todo.completed == true ? ( e.currentTarget.classList.add('completed'), console.log("was here")) : ( e.currentTarget.classList.remove('completed') ) );
        }


    render() {

        return (
            <div className="container">
        <div className="inner-container"> 
            {this.state.todos.map(todo => (
      <TodoRow key={todo.id} todo={todo} {...todo} toggle={this.toggleTodo} />
       ))}
            <AddTodoBar value={this.state.value} onValueChange={this.handleInputChange} onSave={this.onSave}/>
        </div>
    </div>
       );
};

}




$(function() {
     // Focus on load
     $('.add-input').focus();
     // Force focus
     $('.add-input').focusout(function(){
         $('.add-input').focus();
     });
 });






