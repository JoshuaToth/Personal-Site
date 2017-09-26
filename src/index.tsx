import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Hello} from './app/hello';
import {AboutMe} from './app/articles/about';
import {ByoSite1} from './app/articles/byo-site-1';
import {ByoSite2} from './app/articles/byo-site-2';
import {ReactRouterFix} from './app/articles/react-router-fix';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Hello}/>
    <Route path='/about' component={AboutMe}/>
    <Route path='/byo-site-1' component={ByoSite1}/>
    <Route path='/byo-site-2' component={ByoSite2}/>
    <Route path='/react-router-fix' component={ReactRouterFix}/>
  </Router>,
  document.getElementById('root')
);
