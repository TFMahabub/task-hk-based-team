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
          toLink="/user-edit"
        >
          User Edit
        </SingleNavLink>
      </li>
      <li className="">
        <SingleNavLink
          toLink="/user-delete"
        >
          User Delete
        </SingleNavLink>
      </li>
    </>
  );
}

export default AsideAllMenus;
