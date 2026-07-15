import type { ReactNode } from "react";
import styles from "./Container.module.css";

function Container({ children }: { children: ReactNode }) {
  return <div className={styles.parentContainer}>{children}</div>;
}

export default Container;
