import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectModal,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ContactList from "../../components/ContactList/ContactList";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModal);
  console.log("Modal is open:", modalIsOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <Error />}
      <ContactList />
      {modalIsOpen && <ModalWindow />}
    </div>
  );
}
