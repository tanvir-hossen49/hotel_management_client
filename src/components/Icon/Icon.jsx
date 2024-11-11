import React from "react";

const Icon = ({ name, size = 24, fill = "none", stroke = "currentColor" }) => {
  const icons = {
    user: (
      <svg
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    calendar: (
      <svg
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
        <path d="M8 2v4" />
        <path d="M17 14h-6" />
        <path d="M13 18H7" />
        <path d="M7 14h.01" />
        <path d="M17 18h.01" />
      </svg>
    ),
    search: (
      <svg
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    downArrow: (
      <svg
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        viewBox="0 0 24 24"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
