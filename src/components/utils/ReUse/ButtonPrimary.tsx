interface PropsType {
  color: 'bg-primary' | 'bg-error' | 'bg-secondary' | undefined;
  children: React.ReactNode;
  buttonType: 'button' | 'submit' | 'reset' | undefined
  onClick: () => void
}

function ButtonPrimary({
  color, buttonType, children, ...attributes
}:PropsType) {
  return (
    <button
      type={buttonType}
      className={`h-10 ${color && color} px-6 flex items-center justify-center rounded-md text-white`}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
