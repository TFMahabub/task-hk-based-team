import SingleNavLink from './SingleNavLink';

function AsideAllMenus() {
  return (
    <>
      <li className="">
        <SingleNavLink
          toLink="/user-create"
        >
          User Create
        </SingleNavLink>
      </li>
      <li className="">
        <SingleNavLink
          toLink="/users-table"
        >
          All Users
        </SingleNavLink>
      </li>
    </>
  );
}

export default AsideAllMenus;
