
import "./input.css"
const FormInput = ({label, errorMessage, onChange, ...inputProps}) => {


  return (
    <div className="flex flex-col w-[280px]">
    <label  className=" text-slate-500 "> {label}</label>
      <input className=" w-full border border-gray-500 py-3 pr-10 pl-3 p outline-none rounded my-1 placeholder:text-left invalid:border-red-500"
        {...inputProps}
        onChange={onChange}
        
      />
      <span className="hidden text-[13px] text-red-500 ">{errorMessage}</span>
    </div>
  );
}

export default FormInput;