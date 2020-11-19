import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chat = ({ inputs }) => {
  return <div>{inputs.email ? `Hi ${inputs.email}` : null}</div>;
};

Chat.propTypes = {
  inputs: PropTypes.object,
};

const mapStateToProps = (state) => ({
  inputs: state.login.inputs,
});

export default connect(mapStateToProps)(Chat);
