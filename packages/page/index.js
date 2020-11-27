import React from 'react';
import ReactDOM from 'react-dom';
import  'moment'
import 'lodash'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import TimCahill from "./TimCahill/TimCahill";
import ReactReview from './TimCahill/ReactReview'
import {PracticeProvider, SonComp} from './TimCahill/ReactReview'


// ReactDOM.render(<ReactReview number={7} />, document.getElementById('root'));
// ReactDOM.render(<PracticeProvider><SonComp number={7}/></PracticeProvider>, document.getElementById('root'));
ReactDOM.render(<TimCahill />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

