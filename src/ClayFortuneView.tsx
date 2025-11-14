import { useEffect, useState } from "react";
import styles from "./clayFortune.module.scss";

interface ClayFortuneViewProps {
  message: string;
}

export function ClayFortuneView({ message }: ClayFortuneViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.fortuneContainer}>
      <img
        src="/clay-rainbow-left.png"
        alt="Clay rainbow left"
        className={`${styles.fortuneHalf} ${styles.left} ${
          isOpen ? styles.open : ""
        }`}
        style={{
          height: "258px",
          width: "auto",
        }}
      />
      <img
        src="/clay-rainbow-right.png"
        alt="Clay rainbow right"
        className={`${styles.fortuneHalf} ${styles.right} ${
          isOpen ? styles.open : ""
        }`}
        style={{
          height: "258px",
          width: "auto",
        }}
      />
      <div className={`${styles.fortune} ${isOpen ? styles.visible : ""}`}>
        <p>{message}</p>
      </div>
    </div>
  );
}
