import React from "react";
import "./inputWithButton.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export interface InputWithButtonProps {
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
  btnBorder?: string;
  btnLabel?: string;
  btnBgColor?: string;
  btnTextColor?: string;
  hasIcon?: boolean;
  iconBtn?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const InputWithButton: React.FC<InputWithButtonProps> = ({
  id = "",
  name = "",
  type = "text",
  option,
  border,
  width,
  padding,
  boxShadow,
  backgroundColor,
  placeholder,
  fontSize,
  color,
  btnBorder,
  btnLabel,
  btnBgColor,
  btnTextColor,
  hasIcon = false,
  iconBtn = false,
  icon,
  ...props
}) => {
  const btnPadding = hasIcon ? "8px 20px" : "10px 20px";

  return (
    <div className={"box"}>
      <Input
        id={id}
        name={name}
        type={type}
        option={option}
        border={border}
        width={width}
        padding={padding}
        backgroundColor={backgroundColor}
        placeholder={placeholder}
        fontSize={fontSize}
        color={color}
        onClick={() => {}}
      />
      <div className={"buttonBox"}>
        <Button
          primary
          option={option}
          border={btnBorder}
          padding={btnPadding}
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
