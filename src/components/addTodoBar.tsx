import * as React from 'react';
// import  from 'jquery';



// export const AddTodoBar = () => {
//     return (
//              <div>   
//                 <input className="add-input" type="text" placeholder="Enter todo title"/>
//                 <button className="fas fa-plus-circle fa-2x" onClick=></button>
//             </div>
//     );
// };

interface Props {
  value:string
  onValueChange:(value: string) => void;
  onSave: (e) => void;

}

// interface State {
//   value: string
// }



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




// $(function() {
//      // Focus on load
//      $('.add-input').focus();
//      // Force focus
//      $('.add-input').focusout(function(){
//          $('.add-input').focus();
//       });
// });