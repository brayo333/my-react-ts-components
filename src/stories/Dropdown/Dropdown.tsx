import React from "react";
import "./dropdown.css";
import { ReactComponent as ArrowDown } from "../assets/myIcons/arrow_down.svg";

export interface DropdownProps {
  id?: string;
  name?: string;
  border?: string;
  boxShadow?: string;
  width?: string;
  backgroundColor?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  option?: "rounded" | "slightlyRounded" | "box" | "line";
  onClick?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  id = "",
  name = "",
  border,
  boxShadow,
  width,
  backgroundColor,
  padding,
  fontSize,
  color,
  option,
  ...props
}) => {
  return (
    <div
      className={["dropdownStyle", `dropdownStyle--${option}`].join(" ")}
      style={{ border, boxShadow, width, backgroundColor }}
    >
      <select
        id={id}
        name={name}
        style={{
          padding,
          fontSize,
          color,
        }}
        {...props}
      >
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option length">
          Option that has too long of a value to fitlong of a value to fit
        </option>
      </select>
      <span className={"focus"}></span>
    </div>
  );
};
