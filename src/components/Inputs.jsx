
// import { useState } from "react"
import "../input.css"
const Input = ({label, errorMessage, onChange ,...inputProps}) => {
  // const [focused, setFocused] = useState(false)

/*   const handleFocused = () => {
    setFocused(true)
  } */

  return (
    <div className="flex flex-col w-auto">
    {/* <label  className=" text-slate-500 "> {label}</label> */}
      <input className="w-full border-b border-gray-300 py-3 pr-10 pl-3 outline-none  text-[15px] my-1  placeholder:text-sm font-semibold" //
        {...inputProps}
        onChange={onChange}
        // onBlur={handleFocused} 
        // focused={focused.toString()}
         title={inputProps.type == 'date' ? 'Data de Nascimento': '' }
      />
      <span className="hidden text-sm text-[#d72923]  font-normal">{errorMessage}</span>
    </div>
  );
}

export default Input;