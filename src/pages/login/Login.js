import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../redux/login/login.actions';

const Login = ({ inputs, login }) => {
  return (
    <div>
      <form>
        <input
          onChange={({ target }) => login({ ...inputs, email: target.value })}
          name="email"
          type="email"
        />
        <input
          onChange={({ target }) => login({ ...inputs, password: target.value })}
          name="password"
          type="password"
        />
        <Link to="/chat">Login</Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  inputs: PropTypes.object,
  login: PropTypes.func,
};

const mapStateToProps = (state) => ({
  inputs: state.login.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  login: (inputs) => dispatch(login(inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
