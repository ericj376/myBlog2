var React = require('react');

function UserLoginForm(props) {
        return (
            <div className="jumbotron">
              <div className="container">
                <form onSubmit={ props.createNewUser } role="form">
                    <legend>{this.props.login ? 'Log In' : 'Sign Up'}</legend>
                  
                    <div className="form-group">
                      <label>email</label>
                      <input onChange={ props.onEmailChange } name="email" type="email" className="form-control" id="" placeholder="Input field" />
                    </div>

                    <div className="form-group">
                      <label>password</label>
                      <input onChange={ props.onPasswordChange } name="password" type="password" className="form-control" id="" placeholder="Input field" />
                    </div>
                  
                    
                  
                    <button type="submit" className="btn btn-primary">{this.props.login ? 'Log In' : 'Sign Up'}</button>
                  </form>
              </div>
            </div>
            )
};

module.exports = UserLoginForm;