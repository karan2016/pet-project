import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AdminPage from './routes/AdminPage';
import ServicePage from './routes/ServicePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/service" component={ServicePage} />
    </Router>
  );
}

export default RouterConfig;
