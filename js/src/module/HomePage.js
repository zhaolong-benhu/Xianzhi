'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import catch_render_error from './catch_error';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute} from 'react-router'

import LineOpenClass from './LineOpenClass.js';
import Summit from './Summit.js';
import Training from './Training.js';
import Other from './Other.js';




const ACTIVE = { color: 'red' }

@catch_render_error
export default class HomePage extends React.Component{

    componentDidMount(){
    }

    render()
    {
      return(
        <div className="home-container">
          <div className="classification">
          <Link to="/LineOpenClass" activeClassName="active">线下公开课</Link>
          <Link to="/Training" activeClassName="active">内训</Link>
          <Link to="/Summit" activeClassName="active">峰会</Link>
          <Link to="/Other" activeClassName="active">其他活动</Link>
         </div>
       </div>
    )

    }
}

ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <Route path="/LineOpenClass" component={LineOpenClass}/>
      <Route path="/Training" component={Training}/>
      <Route path="/Summit" component={Summit}/>
      <Route path="/Other" component={Other}/>
    </Route>

</Router>
), document.getElementById('app'))


const Main = ({children, history}) => {
return (
<div>
<nav>
        <div history={history}/>
      </nav>
      <div>
        {children}
      </div>
</div>
 )
}
