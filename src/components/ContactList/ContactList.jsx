import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { Toaster } from "react-hot-toast";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.listItem}>
            <Contact contactItem={contact} />
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
}
