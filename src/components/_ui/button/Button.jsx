import styles from "./Button.module.scss";

export function Button() {
  return <button className={styles.btn}>+&nbsp; Разместить объявление</button>;
}
export function DefaultButton() {
  return <button className={styles.defaultBtn}>Читать</button>;
}
