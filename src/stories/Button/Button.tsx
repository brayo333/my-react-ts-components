import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  type?: "circle" | "rounded" | "slightlyRounded" | "box";
  border?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  label?: string;
  hasIcon?: boolean;
  iconBtn?: boolean;
  icon?: any;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = true,
  type,
  border,
  backgroundColor,
  width,
  color,
  label,
  hasIcon = false,
  iconBtn = false,
  icon,
  ...props
}) => {
  const mode = primary ? "buttonStyle--primary" : "buttonStyle--secondary";
  const iconMode = iconBtn ? "btnIcon--iconBtn" : "btnIcon--withIcon";

  return (
    <button
      type="button"
      className={["buttonStyle", `buttonStyle--${type}`, mode].join(" ")}
      style={{ width, backgroundColor, color, border }}
      {...props}
    >
      {hasIcon ? (
        <div>
          {/* <img src={icon} className={iconMode} alt="" /> */}
          <span className={iconMode}>{icon}</span>
          <span className={"btnIcon--withIconText"}>{label}</span>
        </div>
      ) : (
        <>{label}</>
      )}
    </button>
  );
};
