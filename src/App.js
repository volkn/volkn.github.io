import React from 'react';
import Layout from './components/Layout';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from './pages/HelloPage';
import ResumeAndTimeline from './pages/ResumeAndTimeline';
//import Blog from './pages/Blog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/resume" component={ResumeAndTimeline} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
