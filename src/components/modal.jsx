export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)", display: "flex",
      justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", minWidth: "400px" }}>
        <button onClick={onClose} style={{ float: "right" }}>X</button>
        {children}
      </div>
    </div>
  );
}
