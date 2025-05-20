"use client";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";


interface TextBoxProps {
    placeholder?: string;
    register: UseFormRegister<any>;
    name: string;
}

const TextBox: React.FC<TextBoxProps> = ({ placeholder, register, name }) => {
    const [text, setText] = useState<string>("");

    return (
        <input
            type="text"
            {...register(name)}
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