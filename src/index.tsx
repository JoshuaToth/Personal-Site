import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import { Grid, Row, Col } from 'react-bootstrap';

import {Hello} from './app/hello';
import {AboutMe} from './app/articles/about'

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Grid className='container-full'>
      <Route path='/' component={Hello}/>
      <Route path='/about' component={AboutMe}/>
    </Grid>
  </Router>,
  document.getElementById('root')
);
