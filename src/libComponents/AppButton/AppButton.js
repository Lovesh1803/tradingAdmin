import React from "react";
import "./AppButton.css";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description button component
 * @returns JSX.Element
 */
function AppButton({ text, type = "primary", style, onClick }) {
  return (
    <button
      className="button"
      style={{
          color: "white",
          backgroundColor: type === "primary" ? "#3B71CA" : "#9FA6B2",
          ...style,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AppButton;
