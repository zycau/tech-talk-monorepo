import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export const CommonSection = () => {
  return (
    <div>
      <h1>I am common section!</h1>
    </div>
  )
}

ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);


