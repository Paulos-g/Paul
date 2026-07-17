import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

function Button({ text, icon, onClick, className = "" }: ButtonProps) {
  return (
    <button className={`Btn ${className}`} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
