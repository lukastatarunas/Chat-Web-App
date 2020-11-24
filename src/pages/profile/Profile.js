import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateHeader, login } from '../../redux/login/login.actions';

import { TextField, Button } from '@material-ui/core';
import { useStyles, EditProfileContainer } from './styles';

const Profile = ({ history }) => {
  const classes = useStyles();
  const inputs = useSelector((state) => state.login.inputs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeader());
  }, [dispatch]);

  const handleClick = () => {
    history.push('/chat');
  };

  return (
    <EditProfileContainer className={classes.root}>
      <TextField
        onChange={({ target }) => dispatch(login({ ...inputs, email: target.value }))}
        label="Edit Username"
      />
      <br />
      <br />
      <Button onClick={handleClick} variant="outlined">
        Go Back To Chat
      </Button>
    </EditProfileContainer>
  );
};

Profile.propTypes = {
  history: PropTypes.object,
};

export default Profile;
