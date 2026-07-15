import type { ReactNode } from "react";
import styles from "./innerContainer.module.css";

function InnerContainer({ children }: { children: ReactNode }) {
  return <div className={styles.innerContainer}>{children}</div>;
}

export default InnerContainer;
