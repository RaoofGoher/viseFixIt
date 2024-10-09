// ToastContext.js
import React, { createContext, useState, useContext, useCallback } from 'react';
import Toast from '../components/Toast'; // Importing Toast component

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type) => {
    const id = Math.random().toString(36).substring(7); // unique id for each toast
    setToasts((currentToasts) => [...currentToasts, { id, message, type }]);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-5 right-5 z-50 space-y-3">
        {toasts.map((toast) => (
          <Toast key={toast.id} type={toast.type} message={toast.message} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastContext;
