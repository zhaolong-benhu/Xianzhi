'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import catch_render_error from './module/catch_error';

 import HomePage from './module/HomePage.js';
 import LineOpenClass from './module/LineOpenClass.js';
 import Summit from './module/Summit.js';
 import Training from './module/Training.js';
 import Other from './module/Other.js';
 import { Router, Route, Link, browserHistory, hashHistory, IndexRoute} from 'react-router'



@catch_render_error
class MainPage extends React.Component{
    render(){
      return(
        <div>
            <Link to="/LineOpenClass" activeClassName="active">线下公开课</Link>
            <Link to="/Training" activeClassName="active">内训</Link>
            <Link to="/Summit" activeClassName="active">峰会</Link>
            <Link to="/Other" activeClassName="active">其他活动</Link>
        </div>
      )
    }
}


ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={MainPage}>    
      <Route path="/LineOpenClass" component={LineOpenClass}/>
      <Route path="/Training" component={Training}/>
      <Route path="/Summit" component={Summit}/>
      <Route path="/Other" component={Other}/>
    </Route>

</Router>
), document.getElementById('app'))
