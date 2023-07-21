function TextPageHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl font-semibold text-textColor">{children}</h1>
  );
}

export default TextPageHeader;
