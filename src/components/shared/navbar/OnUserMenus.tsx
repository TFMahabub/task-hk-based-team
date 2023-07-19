import { Link } from 'react-router-dom';
import TextNavbarMenu from '../../utils/ReUse/TextNavbarMenu';

function OnUserMenus() {
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
      <Link
        to="/dashbord"
        className=""
      >
        <TextNavbarMenu>
          Dashbord
        </TextNavbarMenu>
      </Link>
    </>
  );
}

export default OnUserMenus;
