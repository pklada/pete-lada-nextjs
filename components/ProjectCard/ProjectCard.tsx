import { Text } from '@/components/Text/Text';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  title,
  subtitle,
  image,
  company,
  year,
  slug
}: {
  title: string;
  subtitle: string;
  image: StaticImageData;
  company: string;
  year: string;
  slug: string;
}) => {
  return (
    <Link className={styles.card} href={`/work/${slug}`} prefetch={false}>
      <div className={styles.cardImage}>
        <Image
          src={image}
          fill
          alt={title}
          placeholder="empty"
          sizes={`(max-width: 800px) 50vw, 100vw`}
        />
      </div>
      <div className={styles.cardMeta}>
        <Text weight="bold">{title}</Text>
        <Text intensity="medium" size="small">
          {subtitle}
        </Text>
      </div>
      <div className={styles.cardPills}>
        <div className={styles.cardPill}>
          <Text size="small" isMonospace>
            {company}
          </Text>
        </div>
        <div className={styles.cardPill}>
          <Text size="small" isMonospace>
            {year}
          </Text>
        </div>
      </div>
    </Link>
  );
};
