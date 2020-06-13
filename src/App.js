import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import {
  withStyles,
} from '@material-ui/core';

import Home from './pages/Home';
import Navigation from './components/NavigationBar';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossOrigin="anonymous"
    />
    <Navigation />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);