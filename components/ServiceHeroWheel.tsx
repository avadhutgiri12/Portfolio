import styles from "./service.module.css";
import { SERVICE_WHEEL_DATA } from "@/data/serviceData";

export default function ServiceHeroWheel() {
  const data = SERVICE_WHEEL_DATA;
  return (
    <div className={styles.wheelScene} aria-label="A rotating wheel representing my services">
      <div className={`${styles.wheelOrbit} ${styles.wheelOrbitOne}`}>
        {data.outerOrbit.map((word, index) => (
          <span
            className={styles.orbitWord}
            key={word}
            style={{ "--index": index, "--count": data.outerOrbit.length } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </div>
      <div className={`${styles.wheelOrbit} ${styles.wheelOrbitTwo}`} aria-hidden="true">
        {data.innerOrbit.map((word, index) => (
          <span
            className={`${styles.orbitWord} ${styles.orbitWordMuted}`}
            key={word}
            style={{ "--index": index, "--count": data.innerOrbit.length } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </div>
      <div className={styles.wheelCore}>
        <span className={styles.coreSmall}>{data.core.smallText}</span>
        <strong>{data.core.mainText}</strong>
        <span className={styles.coreArrow}>{data.core.coreArrow}</span>
      </div>
      <span className={styles.wheelPointer} aria-hidden="true">{data.wheelPointer}</span>
      <span className={styles.wheelNumber}>{data.wheelNumber}</span>
    </div>
  );
}