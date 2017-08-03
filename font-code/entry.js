

import { Router, Route, browserHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'


import Main from './components/Main'
import Main2 from './components/Main2'
import Main3 from './components/Main3'

//var Main2 = require('./components/Main2');
//ar Test2 = require('./components/Test2');
import 'antd/dist/antd.css';
/****test3***********/
render((
    <Router history = {browserHistory}>
        <Route path = "/" component={Main}></Route>
        <Route path = "/refresh_feed" component={Main}/>
        <Route path = "/video" component={Main2}/>
        <Route path = "/app_launch" component={Main3}/>
    </Router>
), document.getElementById('content'))
/****test3***********/

/***test3***********
render((
    <Router history = {browserHistory}>
        <Route path = "/" component={Main}></Route>
        <Route path = "/refresh_feed" component={Main}/>
        <Route path = "/video" component={Main2}/>
        <Route path = "/app_launch" component={Main3}/>
    </Router>
), document.getElementById('content'))
****test3***********/