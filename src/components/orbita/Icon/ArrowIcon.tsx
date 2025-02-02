import React from "react";

export const ArrowIcon = ({ size = 24, fill = "#313131", direction = "left" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M0.451987 1.57999L1.51299 0.519991L7.29199 6.29699C7.38514 6.38956 7.45907 6.49963 7.50952 6.62088C7.55997 6.74213 7.58594 6.87216 7.58594 7.00349C7.58594 7.13482 7.55997 7.26485 7.50952 7.3861C7.45907 7.50735 7.38514 7.61742 7.29199 7.70999L1.51299 13.49L0.452987 12.43L5.87699 7.00499L0.451987 1.57999Z"
        fill={fill}
      />
    </svg>
  );
};
