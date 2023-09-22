'use client';

import React, { useContext } from 'react';
import styles from './project.module.css';
import { useIsMobile } from '@/utils/useIsMobile';
import { Navbar } from '@/components/Navbar/Navbar';

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile && <Navbar />}
      {children}
    </div>
  );
}

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles.sectionTitle}>{children}</h3>
);
