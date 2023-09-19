import { Text } from '@/components/Text/Text';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './PostHeader.module.css';

interface PostHeaderProps {
  title: string;
  subtitle: string;
  imgSrc?: string;
  image?: StaticImageData;
  backgroundColor?: string;
  className?: string;
  imgContainerClassName?: string;
}

export const PostHeader = ({
  title,
  subtitle,
  imgSrc,
  image,
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
        {imgSrc && (
          <div
            className={`${styles.introImage} ${imgContainerClassName ?? ''}`}
          >
            <Image src={imgSrc} fill alt={title} />
          </div>
        )}
        {image && (
          <div
            className={`${styles.introImage} ${imgContainerClassName ?? ''}`}
          >
            <Image src={image} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};
