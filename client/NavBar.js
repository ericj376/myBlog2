var React = require('react');
var UserApp = require('./UserApp')
var links = ['About', 'Blog', 'Pics', 'Resume'];

var NavBar = React.createClass({
  render: function() {
    var self = this;
    var link = links.map(function(item){
    return (
      <li className="nav-item">
      <a className="nav-link" onClick={self.props.setActiveComponent.bind(null, item)} >{ item }</a>
    </li>
    )

  });

    return (
    <nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="#">Navbar</a>
  <ul className="nav navbar-nav">
    {link}
  </ul>
  <li className="form-inline pull-xs-right">
        <button onClick={self.props.setActiveComponent.bind(null, 'signUp')}className="btn btn-success-outline" type="submit">Sign Up</button>
        <button onClick={self.props.setActiveComponent.bind(null, 'login')} className="btn btn-success-outline" type="submit">Login</button>
      </li>
  
</nav>
    )
    
  }
});

module.exports = NavBar;