import React from 'react'

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};

    if(name.length > 0){
      this.refs.name.value = "";
      updates.name = name;
    }
    if(message.length > 0){
      this.refs.message.value = "";
      updates.message = message;
    }
    this.props.onNewStates(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <textarea ref="message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
