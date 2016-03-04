import React from 'react';
import { Link } from 'react-router';

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item, index) {
      return <form className="col s6 offset-s3">
                <div className="card" >
                  <p>Pregunta {item.id}</p>
                  <p>{item.text}</p>
                  <p>{item.request}</p>
                </div>
            </form> 

    };
    
    return <div className="row">
                  {this.props.items.map(createItem)}   
           </div>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], quiz: {}};
  },
  onChange: function(e) {
    var quiz = {
    	text: e.target.value
    }
    this.setState(quiz);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var quiz = {
    	text: this.state.text,
    	request: this.state.request,
    	id: this.state.items.length + 1
    };
    var nextItems = this.state.items.concat([quiz]);
    var nextText = {};
    this.setState({items: nextItems, quiz: nextText});

  },
  render: function() {
    return (
      <div className="row" >
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="col s6 offset-s3">
           <div className="card" >
                <h3>{'Pregunta #' + (this.state.items.length + 1)}</h3>
          		<input  onChange={this.onChange} value={this.state.quiz.text} />
          		<button className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons">add</i></button>
           </div>
        </form>
      </div>
    );
  }
});
export default TodoApp;