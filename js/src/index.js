'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import catch_render_error from './module/catch_error';

import Xianzhi from './module/Xianzhi.js';

@catch_render_error
class MainPage extends React.Component{
    render(){
      return(
        <div>
          <Xianzhi />
        </div>
      )
    }
}

ReactDOM.render(
  <MainPage />,document.getElementById('app')
);
