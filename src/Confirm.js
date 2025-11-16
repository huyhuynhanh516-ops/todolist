// @ts-ignore
import "./css/Confirm.css";

// @ts-ignore
export default function Confirm({ show, message, onConfirm, onCancel, type = "warning" }) {
  if (!show) return null;

  return (
    <div className={`confirm-overlay ${type}`}>
      <div className="confirm-box">
        <span className="confirm-icon">
          {type === "warning" && "⚠️"}
          {type === "info" && "ℹ️"}
        </span>
        <span>{message}</span>
        <div className="confirm-buttons">
          <button className="confirm-ok" onClick={onConfirm}>OK</button>
          <button className="confirm-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
