import React from "react";
import ChevronRight from "../SVGs/ChevronRight";

export default function Input({ handleChange }) {
  const [text, setText] = React.useState("");

  handleChange(text);

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="flex items-center">
        <ChevronRight />
        <input
          type="text"
          placeholder="Type help for more"
          class="block bg-[#000000] w-full px-3 placeholder-white placeholder-opacity-[60%] text-white text-[1.2rem] sm:text-[2rem] tracking-[0.1rem] focus:outline-none"
          onChange={changeHandler}
        />
      </div>
    </>
  );
}
