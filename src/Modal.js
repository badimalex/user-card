function Modal({ user, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{user.name}</h2>
        <p><strong>Телефон:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Дополнительная информация:</strong> Your additional info here</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Modal;
