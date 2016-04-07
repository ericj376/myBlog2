var React = require('react');
var UserSignUpForm = require('./UserSignUpForm');

var UserSignUpFormData = React.createClass({
  getInitialState: function() {
    return {
      email: null,
      passwordOne: null,
      passwordTwo: null,
      userName: null
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },
  onEmailChange: function(e){
    this.setState({ email: e.target.value })
  },
  onPasswordOneChange: function(e){
    this.setState({ passwordOne: e.target.value })
  },
  onPasswordTwoChange: function(e){
    this.setState({ passwordTwo: e.target.value })
  },
  onUserNameChange: function(e){
    this.setState({ userName: e.target.value })
  },

  createNewUser: function(e) {
    e.preventDefault();
     var userData = {
       email: this.state.email,
       passwordOne: this.state.password,
       passwordTwo: this.state.password,
       userName: this.state.userName,
     };
    var self = this;
      $.ajax( {
      url: '/api/user',
      method: 'POST',
      data: userData 
    }).done(function(data) {
      self.props.toggleActiveComp('user');
      self.context.sendNotification('Added User!!!!');
    }).fail(function(err) {
      console.log(err);
      alert("Create User Failed!");
      
    });
    this.setState({
      name: '',
      passwordOne: '',
      passwordTwo: '',
      userName: ''
    });
  },
  render: function() {
    return (<FishForm
          createNewFish={this.createNewFish}
          email={this.state.email}
          passwordOne={this.state.passwordOne}
          passwordTwo={this.state.passwordTwo}
          username={this.state.userName} 
           onEmailChange={ this.onEmailChange }
           onPasswordOneChange={ this.onPasswordOneChange }
           onPasswordTwoChange={ this.onPasswordTwoChange }
           onUserNameChange={ this.onUserNameChange }
       />
       )
  }
});


module.exports = UserSignUpFormData;