
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import  App  from '../app';
import { List, Main} from '../components';

/*
* Classs for handling routing
*/


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <div>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/listoftodos" component={List} />
        </Switch>
      </div>
    </Router>
    );
}