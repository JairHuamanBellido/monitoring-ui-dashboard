import React from "react";
import "./index.scss";

interface IProps {
  isActive: boolean;
  onChange(): void;
}
const ToggleButton: React.FC<IProps> = ({
  isActive,
  onChange,
}) => {
  return (
    <div
      onClick={onChange}
      className={`toggle-container ${isActive ? "active" : "inactive"}`}
    >
      <div className="toggle-line"></div>
      <div
        className={`toggle-circle ${isActive ? "active" : "inactive"}`}
      ></div>
    </div>
  );
};

export default ToggleButton;
