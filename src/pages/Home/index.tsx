import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";

const Home = () => {
  const [binNumber, setBinNumber] = useState("");
  const [decimal, setDecimal] = useState<number>(0);

  const handleInput = (binary: string) => {
    if (binary.match("^[01]+$")) {
      setBinNumber(binary.replace(/^0+/, ""));
    } else {
      setBinNumber(binary.slice(0, -1));
    }
  };

  useEffect(() => {
    if (binNumber) {
      setDecimal(parseInt(binNumber, 2));
    } else {
      setDecimal(0);
    }
  }, [binNumber]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.card__title}>Calculadora Binária</h3>
        <div className={styles.inputGroup}>
          <label htmlFor="" className={styles.inputGroup__label}>
            Binário:
          </label>
          <input
            type="text"
            placeholder="Digite 0 ou 1"
            className={styles.inputGroup__input}
            maxLength={8}
            value={binNumber}
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="" className={styles.inputGroup__label}>
            Decimal:
          </label>
          <input
            type="number"
            value={decimal}
            readOnly
            className={styles.inputGroup__input}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
