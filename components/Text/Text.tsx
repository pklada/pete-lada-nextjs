import classNames from 'classnames';
import styles from './text.module.css';

export const Text = ({
  className,
  children,
  size,
  intensity,
  weight,
  isMonospace = false
}: {
  className?: string;
  children: React.ReactNode;
  size?: 'large' | 'small' | 'xsmall';
  intensity?: 'normal' | 'medium';
  weight?: 'bold' | 'black';
  isMonospace?: boolean;
}) => {
  const textClass = classNames({
    [`${className}`]: className!!,
    [styles.small]: size === 'small',
    [styles.xsmall]: size === 'xsmall',
    [styles.large]: size === 'large',
    [styles.medium]: intensity === 'medium',
    [styles.bold]: weight === 'bold',
    [styles.black]: weight === 'black',
    [styles.monospace]: isMonospace
  });

  return <p className={textClass}>{children}</p>;
};

export const TextBlock = ({
  children,
  align,
  gap
}: {
  children: React.ReactNode;
  align?: 'center';
  gap?: 'small' | 'none';
}) => {
  const blockClass = classNames({
    [styles.block]: true,
    [styles.blockAlignCenter]: align === 'center',
    [styles.blockGapSmall]: gap === 'small',
    [styles.blockGapNone]: gap === 'none'
  });

  return <div className={blockClass}>{children}</div>;
};

export const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export const ArrowList = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className={`${styles.list} ${styles.arrowList}`}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <div className={styles.arrowListIndicator}>
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
                  stroke-width="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export const OrderedList = ({ children }: { children: React.ReactNode }) => {
  return <ol className={styles.orderedList}>{children}</ol>;
};
