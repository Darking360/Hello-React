import React from 'react'

var GreeterMessage = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "from default props of the component"
    };
  },
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>This is {message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
