import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "../components/Toast";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message, type = "info", duration = 3000) => {
    setNotification({ message, type, duration });
    setTimeout(() => setNotification(null), duration);
  }, []);

  const handleClose = () => setNotification(null);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={handleClose}
        />
      )}
    </NotificationContext.Provider>
  );
};
