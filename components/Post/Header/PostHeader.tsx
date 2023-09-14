import { ProfilePhoto } from '@/components/ProfilePhoto/ProfilePhoto';
import { Text } from '@/components/Text/Text';
import { Wave } from '@/components/Wave/Wave';
import { useIsMobile } from '@/utils/useIsMobile';
import classNames from 'classnames';
import styles from './PostHeader.module.css';

interface PostHeaderProps {
  title: string;
  subtitle: string;
  imgSrc?: string;
  backgroundColor?: string;
  className?: string;
  imgContainerClassName?: string;
}

export const PostHeader = ({
  title,
  subtitle,
  imgSrc,
  backgroundColor,
  className,
  imgContainerClassName
}: PostHeaderProps) => {
  const headerClasses = classNames({
    [styles.header]: true,
    [styles['header-dark']]: true,
    [`${className}`]: className!!
  });

  return (
    <div
      className={headerClasses}
      style={{
        backgroundColor: backgroundColor
          ? `rgba(${backgroundColor})`
          : undefined
      }}
    >
      <div className={styles.intro}>
        <h2 className={styles.title}>{title}</h2>
        <Text size="large" className={styles.subtitle}>
          {subtitle}
        </Text>
        <div className={`${styles.introImage} ${imgContainerClassName ?? ''}`}>
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};
