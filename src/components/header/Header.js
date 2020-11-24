import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Avatar } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { HeaderContainer } from './styles';

export const headerAvatarUrl = 'https://chatscope.io/storybook/react/static/media/joe.641da105.svg';

const Header = ({ updateHeader, inputs }) => {
  return (
    <HeaderContainer>
      {updateHeader ? `Hi ${inputs.email}` : null}
      {updateHeader ? (
        <Link to="/profile">
          <Avatar src={headerAvatarUrl} name="Lilly" status="available" />
        </Link>
      ) : null}
    </HeaderContainer>
  );
};

Header.propTypes = {
  updateHeader: PropTypes.bool,
  inputs: PropTypes.object,
};

export default Header;
