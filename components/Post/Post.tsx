'use client';

import { AccentContextWrapper } from '@/contexts/AccentColorContext';
import Link from 'next/link';
import React from 'react';
import { Text } from '../Text/Text';
import styles from './Post.module.css';
import { Wave } from '../Wave/Wave';
import { NavbarContext } from '../Navbar/Navbar';
import { TopBarContext } from '../Layout/Layout';

type Resource = {
  title: string;
  url: string;
};

interface PostProps {
  children: React.ReactNode;
  subtitle: string;
  title: string;
  accentRgb?: string;
  prevSlug?: string;
  nextSlug?: string;
  resources?: Resource[];
}

export const Post = ({
  children,
  subtitle,
  title,
  accentRgb,
  prevSlug,
  nextSlug,
  resources
}: PostProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const { setShouldShowBackground, setAccentRgb } =
    React.useContext(NavbarContext);
  const { setPercentWidth } = React.useContext(TopBarContext);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 600);
    setShouldShowBackground(window.scrollY > 200);

    const documentHeight = document.body.scrollHeight;

    if (window.scrollY > 200) {
      setProgress(
        (1 -
          (documentHeight - window.scrollY - window.innerHeight) /
            documentHeight) *
          100
      );
      setPercentWidth(
        (1 -
          (documentHeight - window.scrollY - window.innerHeight) /
            documentHeight) *
          100
      );
    } else {
      setPercentWidth(100);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setAccentRgb(accentRgb);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      setPercentWidth(100);
      setAccentRgb(undefined);
      setShouldShowBackground(false);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.stickyHeader} ${isScrolled && styles.isVisible} ${
          progress > 95 && styles.isComplete
        }`}
      >
        <div
          className={styles.progress}
          style={{ width: `calc(${progress}%)` }}
        >
          <div className={styles.toolTip}>
            <div>
              <Text weight="black" className={styles.stickyHeaderTitle}>
                {title}
              </Text>
              <Text className={styles.stickyHeaderSubtitle}>{subtitle}</Text>
            </div>
            {nextSlug && (
              <Link
                href={`/work/${nextSlug}`}
                className={progress > 95 ? styles.active : undefined}
              >
                Next project
              </Link>
            )}
          </div>
        </div>
      </div>
      {children}
      {resources && resources.length > 0 && (
        <div className={styles.section}>
          <div className={styles.resources}>
            {resources.map((item, i) => (
              <Link key={'resource' + i} href={item.url}>
                <Text>{item.title}</Text>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className={styles.divider}>
        <Wave />
      </div>

      <div className={styles.navigation}>
        {
          <Link
            href={prevSlug ? `/work/${prevSlug}` : ''}
            aria-disabled={!prevSlug}
          >
            Previous project
          </Link>
        }
        {
          <Link href={`/work/${nextSlug}`} aria-disabled={!nextSlug}>
            Next project
          </Link>
        }
      </div>
    </>
  );
};
