import css from "./MButton.module.css";

const Button = ({ children, type }) => {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
