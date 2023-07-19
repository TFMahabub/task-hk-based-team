import { Link } from 'react-router-dom';
import TextNavbarMenu from '../../utils/ReUse/TextNavbarMenu';

function OffUserMenus() {
  return (
    <>
      <Link
        to="/register"
        className=""
      >
        <TextNavbarMenu>
          Create Account
        </TextNavbarMenu>
      </Link>
      <Link
        to="/login"
        className=""
      >
        <TextNavbarMenu>
          Log In
        </TextNavbarMenu>
      </Link>
    </>
  );
}

export default OffUserMenus;
