import React from "react";
import "./input.css";
import { Button } from "../Button/Button";

export interface InputFieldProps {
  value?: string;
  type?: "circle" | "rounded" | "slightlyRounded" | "box";
  border?: string;
  width?: string;
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
  btnLabel?: string;
  btnBg?: string;
  btnTextColor?: string;
  hasIcon?: boolean;
  iconBtn?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  type,
  border,
  backgroundColor,
  width,
  fontSize,
  color,
  btnLabel,
  btnBg,
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
        className={["inputStyle", `inputStyle--${type}`].join(" ")}
        style={{ width, backgroundColor, fontSize, color, border }}
        {...props}
      />
      <div className={"buttonBox"}>
        <Button
          primary
          type={type}
          label={btnLabel}
          backgroundColor={btnBg}
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
