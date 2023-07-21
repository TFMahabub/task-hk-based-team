import { NavLink } from 'react-router-dom';

function SingleNavLink({ toLink, children }:{ toLink:string, children: React.ReactNode }) {
  return (
    <NavLink
      to={toLink}
      className={({ isActive }) => (isActive ? 'bg-primary/20 block px-12 py-2 text-md font-medium text-primary' : ' block px-12 py-2 text-md font-me text-textColor hover:border-blue hover:bg-blue/20 duration-common')}
    >
      {children}
    </NavLink>
  );
}

export default SingleNavLink;
