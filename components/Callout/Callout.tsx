import styles from './Callout.module.css';

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
}

export const Callout = ({ children, className }: CalloutProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span className={styles.icon}>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5H8M8 4.5L4.5 1M8 4.5L4.5 8"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {children}
    </div>
  );
};
