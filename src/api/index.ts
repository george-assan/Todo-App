import { TodoItem } from '../models';
import { todoitems } from './mockdata';

/*
* Handles api call to specified Fake Json string

*/

const fetchTodos = (): Promise<TodoItem[]> => {
	
  return Promise.resolve(todoitems);
};

//json url
const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchTodosAsync = (): Promise<TodoItem[]> => {


return fetch(baseURL)
.then((response) => (response.json()))
.then(mapToItem);
};


//function that adds json object to todos array
const mapToItem = (todoitem: any): TodoItem[] => {
	let item: TodoItem = {
     id: todoitem.id,
   name: todoitem.title,
    completed: todoitem.completed,
  };
  let todos: TodoItem[] = [];
  todos.push(item);
  return  todos;

 };


//function export

export const API = {
  fetchTodos,
  fetchTodosAsync,
};