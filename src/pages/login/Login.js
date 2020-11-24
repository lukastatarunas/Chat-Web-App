import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateHeader, login } from '../../redux/login/login.actions';

import { TextField, Button } from '@material-ui/core';
import { useStyles, LoginForm } from './styles';

const Login = ({ history }) => {
  const classes = useStyles();
  const inputs = useSelector((state) => state.login.inputs);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateHeader());
    history.push('/chat');
  };

  return (
    <LoginForm className={classes.root}>
      <TextField
        onChange={({ target }) => dispatch(login({ ...inputs, email: target.value }))}
        name="email"
        label="Email"
      />
      <TextField
        onChange={({ target }) => dispatch(login({ ...inputs, password: target.value }))}
        name="password"
        label="Password"
      />
      <br />
      <Button onClick={handleClick} variant="outlined">
        Login
      </Button>
    </LoginForm>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
