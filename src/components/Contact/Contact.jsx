import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
// import toast from "react-hot-toast";
import { openModal } from "../../redux/contacts/slice";

export default function Contact({ contactItem: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal({ mode: "delete", contactItem: { id, name } }));
  };

  const handleUpdate = () => {
    dispatch(openModal({ mode: "edit", contactItem: { id, name, number } }));
  };

  return (
    <div className={css.container}>
      <div className={css.textWrap}>
        <p className={css.text}>
          <FaPhoneAlt style={{ marginRight: "8px" }} />
          {name}
        </p>
        <p className={css.text}>
          <IoPersonSharp style={{ marginRight: "8px" }} />
          {number}
        </p>
      </div>
      <div className={css.buttons}>
        <button onClick={handleUpdate} className={css.btnGreen}>
          Update
        </button>
        <button onClick={handleDelete} className={css.btnRed}>
          Delete
        </button>
      </div>
    </div>
  );
}
