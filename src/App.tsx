import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Root from './pages/Root';
import Watch from './pages/Watch';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route path="/watch/:id" component={Watch} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

export default App;
