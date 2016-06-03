'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import catch_render_error from './catch_error';

const ACTIVE = { color: 'red' }

@catch_render_error
export default class LineOpenClass extends React.Component{


  render()
  {
    return(
      <div>线下公开课</div>
    )
  }

}
