var React = require('react');


  
function UserSignUpForm(props){
    return (
      <div>
      <div className="container form_signUp">
      <form onSubmit={ props.createNewUser }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={props.onEmailChange} value={props.email} type="text" className="form-group"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input onChange={props.onPasswordOneChange} value={props.passwordOne} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input onChange={props.onPasswordTwoChange} value={props.passwordTwo} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={props.onUserNameChange} value={props.userName} type="text" className="form-control"/>
        </fieldset>
        <button className="btn btn-secondary-outline" type="submit">Submit</button>
      </form>
      </div>
      </div>
      )
  }

module.exports = UserSignUpForm;
