// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable max-lines */
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { RootState } from '../../app/store';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';
import { removeUserInfo } from '../../feauters/UserForm/userFormSlice';
import TableHeader from './TableHeader';

function UsersTable() {
  // redux
  const { userDatas } = useAppSelector((state: RootState) => state.userInfo);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  return (
    <section className="mt-sectionGap p-8 space-y-6">
      <TextPageHeader>Delete User Info</TextPageHeader>
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <TableHeader />
        </thead>
        <tbody className="w-full">
          {userDatas.map((user) => (
            <tr
              key={user.id}
              id="tr"
              className="h-14 text-xs text-textColor bg-white hover:bg-gray/10 hover:bg-gray-100 border-b border-gray/50 last-of-type:border-b-none"
            >
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="" id="tr" />
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  {/* <ChromeIcon /> */}
                  <span className=" text-sm font-normal">
                    {`${user.firstName} ${' '} ${user.lastName}`}
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  {/* <ChromeIcon /> */}
                  <span className=" text-sm font-normal">{user.email}</span>
                </div>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span className=" text-sm font-normal">{user.phoneNumber}</span>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span className=" text-sm font-normal">{user.address}</span>
              </td>
              <td className="pl-20 text-sm font-normal">
                <div
                  className="flex gap-2 items-center"
                >
                  <span
                    onClick={() => dispatch(removeUserInfo(user.id))}
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-error bg-error/10 cursor-pointer hover:bg-error/20"
                  >
                    <RiDeleteBinLine
                      className="text-xl"
                    />
                    {' '}
                    Delete
                  </span>
                  <span
                    onClick={() => navigate(`/user-edit/${user.id}`)}
                    className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-primary bg-primary/10 cursor-pointer hover:bg-primary/20"
                  >
                    <RiEditBoxLine
                      className="text-xl"
                    />
                    {' '}
                    Edit
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default UsersTable;
