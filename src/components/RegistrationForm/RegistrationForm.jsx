import { Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId, useState } from "react";

import css from "./RegistrationForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegistrationForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Register your account</h2>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={usernameId}>Username</label>
          <Field
            type="text"
            name="name"
            id={usernameId}
            className={css.input}
          ></Field>

          <label htmlFor={emailId}>Email</label>
          <Field
            type="email"
            name="email"
            id={emailId}
            className={css.input}
          ></Field>

          <label htmlFor={passwordId}>Password</label>
          <div className={css.passwordContainer}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={passwordId}
              className={css.input}
            ></Field>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={css.eyeBtn}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button type="submit" className={css.btn}>
            Add user
          </button>
        </Form>
      </Formik>
    </div>
  );
}
