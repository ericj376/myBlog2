var React = require('react');

var UserLoginForm = require('./userLoginForm');


var UserLoginFormData = React.createClass({
    getInitialState: function() {
      return {
        email        : null,
        password     : null,
        username     : null,
      }
    },
    contextTypes: {
        sendNotification: React.PropTypes.func.isRequired
    },
    onEmailChange: function(event) {
      this.setState({ email: event.target.value })
    },
    onPasswordChange: function(event) {
      this.setState({ password: event.target.value })
    },
    createNewUser: function(e) {
      e.preventDefault();

      var userData = {
        email: this.state.email.trim(),
        password: this.state.password.trim()
      };
      var self = this;
      $.ajax({
        url: '/login' ,
        method: 'POST',
        data: userData
      }).done( function() {
        self.props.setActiveComponent('welcome');
        self.context.sendNotification(this.props.login ? 'You Logged In' : 'Signed Up');
      }).fail(function(data){
        self.context.sendNotification(this.props.login ? 'Log In Failed' : 'Sign Up Failed');
      })
    },
    render: function() {
        return (
          <UserLoginForm
             login={this.props.login} 
             createNewUser = { this.createNewUser }
             onEmailChange = { this.onEmailChange }
             onPasswordChange = { this.onPasswordChange } />
        )
    }

});

module.exports = UserLoginFormData;