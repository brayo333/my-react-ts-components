import React from "react";
import "./button.css";

export interface ButtonProps {
  id?: string;
  primary?: boolean;
  option?: "circle" | "rounded" | "slightlyRounded" | "box" | "line";
  border?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
  label?: string;
  hasIcon?: boolean;
  iconBtn?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  id="",
  primary = true,
  option,
  border,
  backgroundColor,
  width,
  padding,
  fontSize,
  color,
  label,
  hasIcon = false,
  iconBtn = false,
  icon,
  ...props
}) => {
  const mode = primary ? "buttonStyle--primary" : "buttonStyle--secondary";
  const iconMode = iconBtn ? "" : "btnIcon--withIcon";

  return (
    <button
      id={id}
      type="button"
      className={["buttonStyle", `buttonStyle--${option}`, mode].join(" ")}
      style={{ width, padding, backgroundColor, fontSize, color, border }}
      {...props}
    >
      {hasIcon ? (
        <div className={"btnIcon--div"}>
          <span className={["btnIcon", iconMode].join(" ")}>{icon}</span>
          <span>{label}</span>
        </div>
      ) : (
        <>{label}</>
      )}
    </button>
  );
};
