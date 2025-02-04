import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast from "react-hot-toast";

export default function Contact({ contactItem: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted successfully.`, {
      duration: 5000,
      position: "top-center",
      iconTheme: {
        primary: "#3a7952",
        secondary: "#95deb1",
      },
    });
  };

  // const handleUpdate = () => {
  //   const updatedContact = { name, number };
  //   dispatch(updateContact({ contactId: id, updatedContact }));
  // };

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
        {/* <button onClick={handleUpdate} className={css.btnGreen}>
          Update
        </button> */}
        <button onClick={handleDelete} className={css.btnRed}>
          Delete
        </button>
      </div>
    </div>
  );
}
