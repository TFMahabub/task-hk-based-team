function TableHeader() {
  return (
    <tr className="h-16 w-full text-lg tracking-wide sticky top-0 bg-white">
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
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-12">
        {/* Last Activity */}
        Address
      </th>
      <th className="text-start bg-gray-5 text-textColor font-semibold text-sm pl-24">
        {/* Last Activity */}
        Action
      </th>
    </tr>
  );
}

export default TableHeader;
