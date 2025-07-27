import React, { useEffect, useState } from "react";

const toastStyles = {
  base: "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white flex items-center gap-3 min-w-[220px] max-w-[90vw] text-base transition-all duration-500",
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
};

const icons = {
  success: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" />
    </svg>
  ),
};

const Toast = ({ message, type = "info", onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in
    setVisible(true);
    // Fade out before unmount (duration must match NotificationProvider timeout)
    const timer = setTimeout(() => setVisible(false), 2700);
    // Optionally call onClose after fade-out
    const remove = setTimeout(() => onClose && onClose(), 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onClose]);

  return (
    <div
      className={`
        ${toastStyles.base} ${toastStyles[type]}
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    >
      {icons[type]}
      <span>{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onClose && onClose(), 500);
        }}
        className="ml-4 text-white/80 hover:text-white focus:outline-none"
        aria-label="Fermer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
