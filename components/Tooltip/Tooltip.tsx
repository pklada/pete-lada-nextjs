import styles from './Tooltip.module.css';

interface ToolTipProps {
  children: React.ReactNode;
  text: React.ReactNode | string;
}

export const ToolTip = ({ children, text }: ToolTipProps) => {
  return (
    <span className={styles.textWrapper}>
      <span className={styles.text}>{children}</span>
      <span className={styles.tooltipWrapper}>
        <span className={styles.inner}>{text}</span>
      </span>
    </span>
  );
};
