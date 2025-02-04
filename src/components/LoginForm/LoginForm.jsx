import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = { email: "", password: "" };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
    } catch (error) {
      toast.error("Invalid email or password, please try again", {
        id: "error-toast",
        duration: 5000,
        position: "top-right",
        color: "#bc1f1f",
      });
    }
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Log in with your email</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} className={css.input} />
          <label htmlFor={passwordId}>Password</label>
          <div className={css.passwordContainer}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={passwordId}
              className={css.input}
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={css.eyeBtn}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button type="submit" className={css.btn}>
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
