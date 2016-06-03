import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

import LineOpenClass from './module/LineOpenClass.js';
import Summit from './module/Summit.js';
import Training from './module/Training.js';
import Other from './module/Other.js';



class App extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="SearchBar">447</div>
        <div className="classification">
          <Link to="/LineOpenClass">线下公开课</Link>
          <Link to="/Training">内训</Link>
          <Link to="/Summit">峰会</Link>
          <Link to="/Other">其他活动</Link>
       </div>
     </div>

    )
  }
}


class Index extends Component {
  render() {
    return (
      <div className="Image">
        app
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
    </Route>
    <Route path="LineOpenClass" component={LineOpenClass} />
    <Route path="Training" component={Training} />
    <Route path="Summit" component={Summit} />
    <Route path="Other" component={Other} />
  </Router>
), document.getElementById('app'))
