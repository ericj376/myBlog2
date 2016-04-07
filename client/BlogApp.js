var React = require('react');
var BlogBox = require('./BlogComps/BlogBox');
var Loader = require('./Loader');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Do you know about blogs?</h1>
        <p className="lead">Well... let me tell you about blogs!</p>
        <hr className="m-y-2"/>
      </div>
      )
  }
});

var BlogApp = React.createClass({
  

  createNewBlog: function(blogData) {
    var self = this;

    console.log('in createNewTodo');

    $.ajax( {
      url: '/api/blog',
      method: 'POST',
      data: blogData 
    }).done(function(data) {
      self.loadAllBlogsFromServer();
    }).fail(function(err) {
      console.log(err);
      alert("Create Blog Failed!");
    });
  },
  render: function() {    
    return (
      <div>
        <Jumbotron />
        <BlogBox />
      </div>
    )
    
  }
});

module.exports = BlogApp;