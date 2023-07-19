function TextNavbarMenu({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="text-md font-normal text-white transform transition duration-common list-none"
    >
      {children}
    </li>
  );
}

export default TextNavbarMenu;
