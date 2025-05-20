"use client";
import React,{ useState } from "react";

interface TextBoxProps {
  placeholder?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ placeholder }) => {
  const [text, setText] = useState<string>("");

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default TextBox;