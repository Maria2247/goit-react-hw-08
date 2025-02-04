import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Your personal online Phonebook!</h1>
      <p className={css.text}>
        Keep all your important contacts handy and organized
      </p>
    </div>
  );
}
