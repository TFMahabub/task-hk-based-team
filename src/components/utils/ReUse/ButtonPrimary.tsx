function ButtonPrimary({ buttonType, children }:{ buttonType:'"button" | "submit" | "reset" | undefined'; children: React.ReactNode }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
