import React from "react";
import "./input.css";
import { Button } from "../Button/Button";

export interface InputFieldProps {
  id?: string;
  type?: "circle" | "rounded" | "slightlyRounded" | "box";
  border?: string;
  width?: string;
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
  btnLabel?: string;
  btnBgColor?: string;
  btnTextColor?: string;
  hasIcon?: boolean;
  iconBtn?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  id = "",
  type,
  border,
  backgroundColor,
  width,
  fontSize,
  color,
  btnLabel,
  btnBgColor,
  btnTextColor,
  hasIcon = false,
  iconBtn = false,
  icon,
  ...props
}) => {

  return (
    <div className={"box"}>
      <input
        type="text"
        id={id}
        className={["inputStyle", `inputStyle--${type}`].join(" ")}
        style={{ width, backgroundColor, fontSize, color, border }}
        {...props}
      />
      <div className={"buttonBox"}>
        <Button
          primary
          type={type}
          label={btnLabel}
          fontSize={fontSize}
          backgroundColor={btnBgColor}
          color={btnTextColor}
          hasIcon={hasIcon}
          iconBtn={iconBtn}
          icon={icon}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
