'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import catch_render_error from './catch_error';

 // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

@catch_render_error
export default class Xianzhi extends React.Component{

    componentDidMount(){
    }

    render()
    {
      return(
        <div className="xianzhi-container">
         <div className="topbg"></div>
        </div>
      )
    }
}
