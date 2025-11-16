import { useEffect } from "react";
// @ts-ignore
import "./css/Alert.css";

// @ts-ignore
export default function Alert({ message, type = "info", show, onClose, duration = 2000, autoHide = true }) {
  useEffect(() => {
    if (show && autoHide) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose, autoHide]);

  if (!show) return null;

  return (
    <div className={`alert-overlay ${type}`}>
      <div className="alert-box">
        <span className="alert-icon">
          {type === "success" && "✔️"}
          {type === "error" && "❌"}
          {type === "warning" && "⚠️"}
        </span>
        <span>{message}</span>
        { !autoHide && <button className="alert-btn" onClick={onClose}>OK</button> }
      </div>
    </div>
  );
}
