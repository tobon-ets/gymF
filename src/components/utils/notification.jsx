import React, { useState, useEffect } from "react";

export default function Notification({ message, type, onClose }){
    const [isVisible, setIsVisible] =useState(true);

    useEffect(() => {
        if (message){
            setIsVisible(true);
        }
    }, [message]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };
    
    if (!isVisible || !message)return null;
    
    const notificationStyles = {
        success: { backgroundColor: "#4CAF50", color: "white" },
        error: { backgroundColor: "#f44336", color: "white" },
        info: { backgroundColor: "#2196F3", color: "white" },
  };

  return(
    <div
      style={{
        ...notificationStyles[type || "info"],
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "15px",
        borderRadius: "5px",
        zIndex: 1000,
        transition: "opacity 0.3s ease",
      }}
      >
        <span>{message}</span>
        <button
                onClick={handleClose}
        style={{
          marginLeft: "15px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        X
      </button>
      </div>
  );
}