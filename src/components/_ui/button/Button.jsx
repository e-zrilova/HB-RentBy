import { Children } from "react/cjs/react.production.min";
import styles from "./Button.module.scss";

export function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
export function DefaultButton({ children }) {
  return <button className={styles.defaultBtn}>{children}</button>;
}
