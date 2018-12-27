import * as React from 'react';
import  { TodoItem } from '../models'

interface Props {
  todo:TodoItem;
  toggle:(e) => void;

}

// interface State {
//   value: string
// }



export class TodoRow extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
      }


    render(){
    return (
        <button data-key={this.props.todo.id} data-completed={this.props.todo.completed} className={"todoItem" + (this.props.todo.completed ? ' completed' : '')} onClick={this.props.toggle}>
                <h1> {this.props.todo.name } </h1>
                <i className="far fa-circle fa-2x"></i>
                 <i className="far fa-check-circle fa-2x"></i>
        </button>
    );
}
}
