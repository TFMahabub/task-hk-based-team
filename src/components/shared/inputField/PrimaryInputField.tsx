interface PropsType {
  htmlForm:string;
  type:string;
  id:string;
  placeholder:string;
  labelName:string;
}

function PrimaryInputField({
  htmlForm, type, id, placeholder, labelName,
}:PropsType) {
  return (
    <label
      htmlFor={htmlForm}
      className="relative block overflow-hidden rounded-md border border-gray/20 px-3 pt-3 shadow-sm focus-within:border-gray/80 focus-within:ring-0"
    >
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-lightGray"
      />

      <span
        className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
      >
        {labelName}
      </span>
    </label>
  );
}

export default PrimaryInputField;
