import styles from './IPhone.module.css';

interface IPhoneProps {
  children: React.ReactNode;
  frameColor?: string;
  includeDynamicIsland?: boolean;
}

export const IPhone = ({
  children,
  frameColor,
  includeDynamicIsland
}: IPhoneProps) => {
  return (
    <div
      className={styles.frame}
      style={frameColor ? { backgroundColor: frameColor } : undefined}
    >
      <div className={styles.screen}>
        {children}
        {includeDynamicIsland ? (
          <div
            className={styles.dynamicIsland}
            style={frameColor ? { backgroundColor: frameColor } : undefined}
          />
        ) : (
          <div
            className={styles.notch}
            style={frameColor ? { backgroundColor: frameColor } : undefined}
          />
        )}
      </div>
    </div>
  );
};
