import { TodoItem } from '../models';
import { todoitems } from './mockdata';

const fetchTodos = (): Promise<TodoItem[]> => {
	
  return Promise.resolve(todoitems);
};


const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchTodosAsync = (): Promise<TodoItem[]> => {


return fetch(baseURL)
.then((response) => (response.json()))
.then(mapToItem);
};

// return fetch(baseURL)
// .then((response) => (response.json()))
// .then(mapToItems);
// };


// const mapToItems = (data: any[]): TodoItem[] => {
// 	console.log(data);
// return data.map(mapToItem);
// };

// const mapToItem = (todoitem): TodoItem => {
//    return {
//      id: todoitem.id,
//    name: todoitem.title,
//     completed: todoitem.completed,
//   };
//  };

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



export const API = {
  fetchTodos,
  fetchTodosAsync,
};