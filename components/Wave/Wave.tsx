import styles from './Wave.module.css';

export const Wave = () => (
  <div className={styles.divider}>
    <WaveSvg />
    <WaveSvg />
    <WaveSvg />
    <WaveSvg />
    <WaveSvg />
  </div>
);

const WaveSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="112"
    height="7"
    viewBox="0 0 112 7"
  >
    <path
      fill="none"
      stroke="#5D4634"
      strokeWidth="2"
      d="M42,234 C46,234 46,229 50,229 C54,229 54,234 58,234 C62,234 62,229 66,229 C70,229 69,234 74,234 C78,234 78,229 82,229 C86,229 86,234 90,234 C94,234 94,229 98,229 C102,229 102,234 106,234 C110,234 110,229 114,229 C118,229 118,234 122,234 C126,234 125,229 130,229 C134,229 134,234 138,234 C142,234 142,229 146,229 C150,229 150,234 154,234"
      transform="translate(-42 -228)"
    />
  </svg>
);
