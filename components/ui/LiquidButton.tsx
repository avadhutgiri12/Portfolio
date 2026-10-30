"use client";

import React from "react";
import "./liquidButton.css";

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`liquid-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="liquid-button-content">{children}</span>
      <span className="liquid-button-shine" />
    </button>
  );
};

export default LiquidButton;