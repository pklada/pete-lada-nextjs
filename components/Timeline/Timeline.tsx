import styles from './Timeline.module.css';

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineItemProps {
  title: string;
  year: string;
  description: string | React.ReactNode;
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
  description
}: TimelineItemProps) => {
  return (
    <div className={styles.item}>
      <label className={styles.itemYear}>{year}</label>
      <div>
        {title && <p className={styles.itemTitle}>{title}</p>}
        <div className={styles.itemDescription}>{description}</div>
      </div>
    </div>
  );
};
