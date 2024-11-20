import React, { useEffect } from "react";
import Icon from "../Icon/Icon";

const AlertMessage = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Close the alert after 5 seconds
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg ${alertTypes[type]} transition-all duration-300`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button className="ml-4 bg-transparent text-white font-bold hover:text-gray-300">
          <Icon name="plus" />
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
