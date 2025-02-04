import { deleteContact } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import css from "ModalWindow.module.css";

export default function ModalWindow({ onClose, deleteName, deleteId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(deleteId));
    onClose();
  };

  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <p>Are you sure you want to delete {deleteName} permanently?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => onClose()}>Cancel</button>
      </div>
    </div>
  );
}
