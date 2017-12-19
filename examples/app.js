import ReactDOM from 'react-dom';
import React from 'react';
import Basic from './basic';
import Text from './text';
import Robot1 from './robot1';

ReactDOM.render(
  <React.Fragment>
    <Basic />
    <Text />
    <Robot1 />
  </React.Fragment>,
  document.querySelector('#root')
);
