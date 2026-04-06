const Input = (props: React.InputHTMLAttributes<HTMLInputElement> ) => {
  return (
    <input
      {...props}
      className="w-[350px] bg-white py-2 px-2 text-xs outline-none rounded-md text-[#32343E] placeholder-[#32343E]"    
    />
  );
};

export default Input;
