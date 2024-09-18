"use client";
import React from "react";

const SearchBox = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        className="border-2  rounded p-2 w-full mb-2 border-black "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
