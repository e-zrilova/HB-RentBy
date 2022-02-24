import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./LayoutDefault.module.scss";
import React from "react";
export function LayoutDefault({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
