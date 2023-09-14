import styles from './Browser.module.css';

interface BrowserProps {
  children: React.ReactNode;
  url?: string;
}

export const Browser = ({
  children,
  url = 'https://quora.com'
}: BrowserProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.buttons}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.urlBar}>{url}</div>
        <div className={styles.profile}>
          <img src="https://pbs.twimg.com/profile_images/1686940524698304512/1oS9_fwg_400x400.jpg" />
        </div>
      </div>
      {children}
    </div>
  );
};
