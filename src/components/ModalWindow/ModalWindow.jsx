import {
  deleteContact,
  updateContact,
} from "../../redux/contacts/operations.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  selectModal,
  selectModalData,
} from "../../redux/contacts/selectors.js";
import { closeModal, openModal } from "../../redux/contacts/slice.js";
import css from "./ModalWindow.module.css";
import clsx from "clsx";

export default function ModalWindow() {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const modalIsOpen = useSelector((state) => {
    console.log("Full Redux State:", state);
    return selectModal(state);
  });

  if (!modalIsOpen) return null;

  const handleDelete = () => {
    dispatch(deleteContact(modalData.contactItem.id));
    toast.success(
      `Contact ${modalData.contactItem.name} deleted successfully.`,
      {
        duration: 4000,
        position: "top-center",
        iconTheme: {
          primary: "#3a7952",
          secondary: "#95deb1",
        },
      }
    );
    dispatch(closeModal());
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleUpdate = () => {
    const { id, name, number } = modalData.contactItem;
    dispatch(
      updateContact({
        contactId: id,
        updatedContact: { name, number },
      })
    );
    toast.success(`Contact ${modalData.contactItem.name} updated`, {
      duration: 4000,
      position: "top-center",
      iconTheme: {
        primary: "#3a7952",
        secondary: "#95deb1",
      },
    });
    dispatch(closeModal());
  };

  const openModalStyles = clsx(css.modalContainer, modalIsOpen && css.isOpen);

  const btnGreen = clsx(css.btn && css.btnGreen);
  const btnRed = clsx(css.btn && css.btnRed);

  return (
    <div className={openModalStyles}>
      {modalData.mode === "edit" ? (
        <form onSubmit={handleUpdate} className={css.modalUpdate}>
          <input
            type="text"
            value={modalData.contactItem.name}
            onChange={(evt) =>
              dispatch(
                openModal({
                  ...modalData,
                  contactItem: {
                    ...modalData.contactItem,
                    name: evt.target.value,
                  },
                })
              )
            }
            className={css.input}
          />
          <input
            type="text"
            value={modalData.contactItem.number}
            onChange={(evt) =>
              dispatch(
                openModal({
                  ...modalData,
                  contactItem: {
                    ...modalData.contactItem,
                    number: evt.target.value,
                  },
                })
              )
            }
            className={css.input}
          />
          <button type="submit" className={btnGreen}>
            Save
          </button>
          <button type="button" className={btnRed} onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div className={css.modalDelete}>
          <p className={css.text}>
            Are you sure you want to delete {modalData.contactItem.name}{" "}
            permanently?
          </p>
          <div className={css.btnWrapper}>
            <button onClick={handleDelete} className={btnGreen}>
              Delete
            </button>
            <button onClick={handleCancel} className={btnRed}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

console.log("🚀  ModalWindow:", ModalWindow);
