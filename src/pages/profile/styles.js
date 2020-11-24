import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const EditProfileContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;
