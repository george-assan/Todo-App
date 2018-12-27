import * as React from 'react';
import { AddTodoBar } from './addTodoBar';
import { TodoRow } from './todo';
import { TodoItem } from '../models';
import * as toastr from 'toastr';
import  { store } from '../store';
import { addTodo, toggleTodo } from  '../actions';
import  'jquery';


/*
* Home page  component
*/

interface State {
    value: string;
    todos: TodoItem[];
}


/*
* Home page  component
*/


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

//this funnction resposible for adding an todo item on the home page. 
//Dispactches redux add todo action
    onSave = e => {
        e.preventDefault();
        store.dispatch(addTodo(this.state.value));
        this.setState({value:'',todos: store.getState().todos});



    }

        toggleTodo(e) {
             
          let id:number = parseInt(e.currentTarget.getAttribute('data-key'));
         console.log(e.currentTarget);
          store.dispatch(toggleTodo(id));
           this.setState({todos: store.getState().todos}); 
         
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



//Function to keep focus input field
$(function() {
     // Focus on load
     $('.add-input').focus();
     // Force focus
     $('.add-input').focusout(function(){
         $('.add-input').focus();
     });
 });






