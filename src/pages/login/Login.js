import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateHeader, login } from '../../redux/login/login.actions';

const Login = ({ updateHeader, history, inputs, login }) => {
  const handleClick = (event) => {
    event.preventDefault();
    updateHeader();
    history.push('/chat');
  };
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
        <button onClick={(event) => handleClick(event)}>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  updateHeader: PropTypes.func,
  history: PropTypes.object,
  inputs: PropTypes.object,
  login: PropTypes.func,
};

const mapStateToProps = (state) => ({
  inputs: state.login.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  login: (inputs) => dispatch(login(inputs)),
  updateHeader: () => dispatch(updateHeader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
