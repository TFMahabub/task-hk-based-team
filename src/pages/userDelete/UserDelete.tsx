import { RiDeleteBinLine } from 'react-icons/ri';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';

function UserDelete() {
  return (
    <section className="mt-sectionGap p-8 space-y-6">
      <TextPageHeader>Delete User Info</TextPageHeader>
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <tr className="h-16 w-full text-lg tracking-wide sticky top-0 bg-lightGray">
            <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
              {/* Browser */}
              Select
            </th>
            <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
              {/* serial */}
              Name
            </th>
            <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-4">
              {/* serial */}
              Email
            </th>
            <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-12">
              {/* Location */}
              Phone Number
            </th>
            <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-20">
              {/* Last Activity */}
              Address
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {[...Array(15)].map((_, i) => (
            <tr
              key={i}
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
                    Mahabub
                  </span>
                </div>
              </td>
              <td className="pl-4">
                <div className="flex gap-2 items-center">
                  {/* <ChromeIcon /> */}
                  <span className=" text-sm font-normal">rjmahabub543@gmail.com</span>
                </div>
              </td>
              <td className="pl-12 text-sm font-normal">
                <span className=" text-sm font-normal">01636725669</span>
              </td>
              <td className="pl-20 text-sm font-normal">
                <div
                  className="flex gap-2 items-center"
                >
                  <span className="flex items-center gap-1 text-md px-2 rounded-md py-[6px] text-error bg-error/10 cursor-pointer hover:bg-error/20">
                    <RiDeleteBinLine
                      className="text-xl"
                    />
                    {' '}
                    Delete
                  </span>
                  {/* eslint-disable-next-line max-lines */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default UserDelete;
