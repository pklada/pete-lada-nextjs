import classNames from 'classnames';
import styles from './Overlay.module.css';
import { createContext, useEffect } from 'react';

interface OverlayProps {
  isOpen: boolean;
  content: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export const Overlay = ({ isOpen, content, title, onClose }: OverlayProps) => {
  const overlayClass = classNames({
    [styles.wrapper]: true,
    [styles.isOpen]: isOpen
  });

  useEffect(() => {
    document.documentElement.classList.toggle('overlay-open', isOpen);
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown, { once: true });
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={overlayClass}>
      <div className={styles.overlay}>
        <div className={styles.navbar}>
          {title}
          <button onClick={onClose} className={styles.close}>
            <span>Close</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L7 7L13 13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L7 7L1 13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.shim} onClick={onClose} />
    </div>
  );
};

interface OverlayContent {
  title: string;
  content: React.ReactNode;
}

interface OverlayContextProps {
  isOpen: boolean;
  setOverlay: ({ title, content }: OverlayContent) => void;
}

export const OverlayContext = createContext<OverlayContextProps>({
  isOpen: false,
  setOverlay: () => {}
});
