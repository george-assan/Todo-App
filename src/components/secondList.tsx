import * as React from 'react';
import { TodoItem } from '../models';
import { API } from '../api';
import { TodoRow } from './todo';
import { store } from '../store';
import { toggleTodo } from '../actions';


/*
* Page  component display api call information
*/



interface State {
    todos: TodoItem[];
}
interface Props {

}

export class List extends React.Component < Props, State > {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    componentDidMount() {
        API.fetchTodosAsync()
            .then((todos) => {
                console.log(todos);
                this.setState({ todos });
            });
    }
    toggleTodo(e) {
        console.log(e.currentTarget);
        let id: number = parseInt(e.currentTarget.getAttribute('data-key'));
         
        let todoItems:TodoItem[] = this.state.todos.slice(0);
 
		todoItems.map(todo => todo.id === id ? (  todo.completed = !todo.completed ) : todo );
		
		this.setState({ todos:todoItems });

    }

    render() {

        return (
            <div className="container">
        <div className="inner-container"> 
                       {this.state.todos.map(todo => (<TodoRow key={todo.id} todo={todo} {...todo} toggle={this.toggleTodo} />))}
        </div>
    </div>
        );
    }
}