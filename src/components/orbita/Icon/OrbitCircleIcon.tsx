import React from "react";

export const OrbitCircleIcon = ({ radius = 600 }) => {
  return (
    <svg width={radius} height={radius} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="300" cy="300" r="299" stroke="#A2A2A2" strokeWidth="2" />
    </svg>
  );
};
