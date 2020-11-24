import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile/Profile';

import Header from './components/header/Header';

import { AppContainer } from './styles';

const App = () => {
  const updateHeader = useSelector((state) => state.login.updateHeader);
  const inputs = useSelector((state) => state.login.inputs);

  return (
    <AppContainer>
      <Header updateHeader={updateHeader} inputs={inputs} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </AppContainer>
  );
};

export default App;
