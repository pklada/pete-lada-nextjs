import styles from './Timeline.module.css';

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineItemProps {
  title: string;
  year: string;
  description: string | React.ReactNode;
  location: string;
}

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.line} />
    </div>
  );
};

export const TimelineItem = ({
  title,
  year,
  description,
  location
}: TimelineItemProps) => {
  return (
    <div className={styles.item}>
      <label className={styles.itemYear}>{year}</label>
      <div>
        <div className={styles.meta}>
          {title && <p className={styles.itemTitle}>{title}</p>}
          <p>{location}</p>
        </div>
        <div className={styles.itemDescription}>{description}</div>
      </div>
    </div>
  );
};
