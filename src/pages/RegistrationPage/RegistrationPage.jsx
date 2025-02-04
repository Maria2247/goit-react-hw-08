import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationForm.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}
