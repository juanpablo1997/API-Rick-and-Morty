import React, { useState } from "react";

export const AddCharacter = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setCharacter
    // console.log('Submit hecho')
  };

  return (
    <form className="serch" onSubmit={handleSubmit}>
      <p>Add Character</p>
      <input
        className="input-add"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCharacter;
