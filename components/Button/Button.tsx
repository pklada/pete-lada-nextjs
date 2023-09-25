import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  className?: string;
  secondary?: boolean;
  small?: boolean;
  includeArrow?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  className,
  secondary,
  small,
  includeArrow,
  onClick
}: ButtonProps) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [`${className}`]: className!!,
    [styles.secondary]: secondary,
    [styles.small]: small,
    [styles.includeArrow]: includeArrow
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
      <div className={styles.arrowContainer}>
        <Arrow />
      </div>
    </button>
  );
};

const Arrow = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 9H16" stroke="black" stroke-width="1.5" />
    <path d="M10 3L16 9L10 15" stroke="black" stroke-width="1.5" />
  </svg>
);
