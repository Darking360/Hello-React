import React from 'react'
import GreeterMessage from 'GreeterMessage'
import GreeterForm from 'GreeterForm'

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "From the default prop"
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewStates: function(updates){
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return(
      <div>
        <GreeterMessage name={name} message={this.state.message}/>
        <GreeterForm onNewStates={this.handleNewStates}/>
      </div>
    );
  }
});

module.exports = Greeter;
