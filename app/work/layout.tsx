import { Navbar } from '@/components/Navbar/Navbar';
import React from 'react';
import styles from './project.module.css';

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles.sectionTitle}>{children}</h3>
);
