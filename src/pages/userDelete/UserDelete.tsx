// eslint-disable-next-line import/no-extraneous-dependencies
import { RiDeleteBinLine } from 'react-icons/ri';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';
import TableHeader from './TableHeader';

function UserDelete() {
  return (
    <section className="mt-sectionGap p-8 space-y-6">
      <TextPageHeader>Delete User Info</TextPageHeader>
      <table className="w-full whitespace-nowrap text-gray">
        <thead>
          <TableHeader />
        </thead>
        <tbody className="w-full">
          {[...Array(15)].map((_, i) => (
            <tr
              // eslint-disable-next-line react/no-array-index-key
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
              <td className="pl-12 text-sm font-normal">
                <span className=" text-sm font-normal">Nawabgonj, Dhaka</span>
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
