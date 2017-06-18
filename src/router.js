import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AdminPage from './routes/AdminPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/admin" component={AdminPage} />
    </Router>
  );
}

export default RouterConfig;
