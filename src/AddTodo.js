import React, {Component} from 'react';

class AddTodo extends Component{
    defaultContentValue =
        '';
    state = {
        id: null, content: this.defaultContentValue
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.id = Math.random();
        this.props.addTodo(this.state);
        this.setState({
            id: null, content: this.defaultContentValue
        });
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" id="content" onChange={this.handleChange} value ={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;