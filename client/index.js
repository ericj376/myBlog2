var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer')
var Welcome = require('./Welcome');
var About = require('./About');
var BlogApp = require('./BlogApp');
var Pics = require('./Pics');
var Resume = require('./Resume');
var Notifier= require('./Notifier');
var UserApp = require('./UserApp');
require('./stylesheets/main.scss');


var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'welcome'
    }
  },

  setActiveComponent: function(componentName){
    console.log(componentName)
    this.setState({
      activeComponent: componentName
    })
  },

  showWhichComponent: function() {
    switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome/>
        break;
    case 'About':
        return <About/>
        break;
    case 'Blog':
        return <BlogApp/>
    case 'Pics':
        return <Pics/>
    case 'Resume':
        return <Resume/>
    case 'login':
        return <UserApp login={ true } setActiveComponent={this.setActiveComponent} />
    case 'signUp':
        return <UserApp login={ false } setActiveComponent={this.setActiveComponent} />
    default:
        return <Welcome/>
    };
  },
  render: function(){
    return (
      
  <div>
    <Notifier>
      <NavBar setActiveComponent={this.setActiveComponent}/>
        <div>
          {this.showWhichComponent()}
        </div>
      <Footer />
    </Notifier> 
  </div>
      )
  }
})

ReactDom.render(
  <App />, document.getElementById('app')
);
