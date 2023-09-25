import { Text } from '@/components/Text/Text';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
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

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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

  const backgroundColorArr = backgroundColor?.split(',');

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
            <Image
              src={image}
              alt={title}
              sizes="100vw"
              priority
              placeholder="blur"
              blurDataURL={
                backgroundColorArr
                  ? rgbDataURL(
                      Number(backgroundColorArr[0]),
                      Number(backgroundColorArr[1]),
                      Number(backgroundColorArr[2])
                    )
                  : undefined
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
