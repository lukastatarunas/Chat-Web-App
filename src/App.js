import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile/Profile';

import Header from './components/header/Header';

import './App.css';

const App = ({ updateHeader, inputs }) => {
  return (
    <div className="App">
      <Header updateHeader={updateHeader} inputs={inputs} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  updateHeader: PropTypes.bool,
  inputs: PropTypes.object,
};

const mapStateToProps = (state) => ({
  updateHeader: state.login.updateHeader,
  inputs: state.login.inputs,
});

export default connect(mapStateToProps)(App);
