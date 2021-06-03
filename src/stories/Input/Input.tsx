import React from "react";
import "./input.css";

export interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  option?: "circle" | "rounded" | "slightlyRounded" | "box" | "line";
  border?: string;
  width?: string;
  padding?: string;
  boxShadow?: string;
  backgroundColor?: string;
  placeholder?: string;
  fontSize?: string;
  color?: string;
  onClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  id = "",
  name = "",
  type,
  option,
  border,
  width,
  padding,
  boxShadow,
  backgroundColor,
  placeholder,
  fontSize,
  color,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={["inputStyle", `inputStyle--${option}`].join(" ")}
      style={{ border, width, boxShadow, backgroundColor, fontSize, color }}
      {...props}
    />
  );
};
