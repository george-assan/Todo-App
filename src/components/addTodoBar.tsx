import * as React from 'react';


/*
* Add Todo form component
*/

interface Props {
  value:string
  onValueChange:(value: string) => void;
  onSave: (e) => void;

}



export class AddTodoBar extends React.Component<Props, {}> {
	
	constructor(props) {
		super(props);
	  this.fieldChange = this.fieldChange.bind(this);
	  }

	  fieldChange(e) {
	    this.props.onValueChange(e.target.value);
	  }

	    render(){
	    
	    return (
             <form className="add-todo-bar">   
                <input className="add-input" type="text" value={this.props.value}  onChange={this.fieldChange} placeholder="Enter todo title" />
                <button className="fas fa-plus-circle fa-2x" onClick={this.props.onSave} ></button>
            </form>
    )
	}
}

