import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { setHamburgerMenu } from '../../../feauters/navbar/navbarSlice';
import ExitIcon from '../../icons/ExitIcon';
import Hamburger from '../../icons/HamburgerIcon';
import TextNavbarMenu from '../../utils/ReUse/TextNavbarMenu';

function Navbar() {
  const { hamburgerMenu } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch();
  return (

    <>
      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/">
          <p
            className="text-2xl font-medium text-white"
          >
            {import.meta.env.VITE_COMPANY_NAME}
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-common">
        {/* -----------common-menus----------- */}
        <button
          type="button"
          onClick={() => dispatch(setHamburgerMenu())}
          className="cursor-pointer md:hidden"
        >
          {!hamburgerMenu && <Hamburger /> }
          {hamburgerMenu && <ExitIcon /> }
        </button>
        {/* -----------common-menus----------- */}
        <div
          className="hidden lg:flex lg:items-center lg:gap-common"
        >
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
