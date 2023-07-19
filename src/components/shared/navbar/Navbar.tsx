import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { setHamburgerMenu } from '../../../feauters/navbar/navbarSlice';
import ExitIcon from '../../icons/ExitIcon';
import Hamburger from '../../icons/HamburgerIcon';
import OffUserMenus from './OffUserMenus';
import OnUserMenus from './OnUserMenus';

function Navbar() {
  const { hamburgerMenu } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch();
  // console.log(cartProducts);

  const user = false;
  return (

    <div
      className="container bg-primary"
    >
      <div className="flex items-center justify-between flex-wrap">
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
            {!hamburgerMenu
                && (
                <Hamburger />
                )}
            {hamburgerMenu
                && (
                <ExitIcon />
                )}
          </button>
          {/* -----------common-menus----------- */}
          <div
            className="hidden lg:flex lg:items-center lg:gap-common"
          >
            {
              user ? <OnUserMenus /> : <OffUserMenus />
            }
          </div>
        </div>
      </div>
      <div
        className={`transform transition-all duration-300 ease-linear ${hamburgerMenu ? 'mt-common flex flex-col items-center gap-1 lg:hidden pb-common-1' : 'hidden h-0'}`}
      >
        {
          user ? <OnUserMenus /> : <OffUserMenus />
        }
      </div>
    </div>
  );
}

export default Navbar;
