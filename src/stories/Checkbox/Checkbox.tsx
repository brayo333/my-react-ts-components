import React from "react";
import "./checkbox.css";

export interface CheckboxProps {
  id?: string;
  name?: string;
  option?: "circle" | "slightlyRounded" | "box";
  value?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id = "",
  name = "",
  option,
  value,
  backgroundColor,
  borderColor,
  ...props
}) => {
  return (
    <label>
      <input type="checkbox" id={id} name={name} value={value} {...props} />
      <span
        style={{ backgroundColor, borderColor }}
        className={["checkboxStyle", `checkboxStyle--${option}`].join(" ")}
      ></span>
    </label>
  );
};
