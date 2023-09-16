'use client';

import Image from 'next/image';
import styles from './home.module.css';
import { Text, TextBlock } from '@/components/Text/Text';
import Link from 'next/link';
import React from 'react';
import { SidebarContext } from '@/components/Sidebar/Sidebar';

export default function Home() {
  const sidebarContext = React.useContext(SidebarContext);

  React.useEffect(() => {
    sidebarContext.setIsCollapsable(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <TextBlock>
        <Text size="large" weight="bold">
          Selected Work
        </Text>
        <Text intensity="medium">
          Projects which highlight some of the more interesting challenges I've
          worked on.
        </Text>
      </TextBlock>
      <div className={styles.grid}>
        <ProjectCard
          title="Eco App"
          subtitle="Designing and developing the Eco App"
          imgSrc="/project-cover-eco-app@2x.png"
          company="Eco"
          year="2021-2023"
          slug="eco-app"
        />

        <ProjectCard
          title="Eco Points Store"
          subtitle="Closing the loop on Eco Points"
          imgSrc="/project-cover-eco-points-store@2x.png"
          company="Eco"
          year="2023"
          slug="eco-points-store"
        />

        <ProjectCard
          title="Quora Messages"
          subtitle="Improving a complex multiplatform communication tool"
          imgSrc="/project-cover-quora-messages@2x.png"
          company="Quora"
          year="2021"
          slug="quora-messages"
        />

        <ProjectCard
          title="Quora Dark Mode"
          subtitle="Adding themeability to a massive consumer platform"
          imgSrc="/project-cover-quora-dark-mode@2x.png"
          company="Quora"
          year="2020"
          slug="quora-dark-mode"
        />

        <ProjectCard
          title="Guidebook Schedule Redesign"
          subtitle="Improving a feature used by millions"
          imgSrc="/project-cover-schedule-redesign@2x.png"
          company="Guidebook"
          year="2019"
          slug="guidebook-schedule-redesign"
        />

        <ProjectCard
          title="Guidebook Spaces"
          subtitle="Adding a new layer to the Guidebook platform"
          imgSrc="/project-cover-spaces@2x.png"
          company="Guidebook"
          year="2018"
          slug="guidebook-spaces"
        />

        {/* <ProjectCard
          title='Guidebook Homepage Redesign'
          subtitle="Rethinking Guidebook's home on the web"
          imgSrc="https://work.petelada.com/assets/images/project-cover-homepage-redesign.png"
          company='Guidebook'
          year='2019'
          slug='quora-messages'
        />

        <ProjectCard
          title='Guidebook UI Icon Set'
          subtitle="Standardizing Guidebook's iconography"
          imgSrc="https://work.petelada.com/assets/images/project-cover-icons.png"
          company='Guidebook'
          year='2017-2020'
          slug='quora-messages'
        />

        <ProjectCard
          title='Guidebook Beacon UI Kit'
          subtitle="Formalizing Guidebook's app UI"
          imgSrc="https://work.petelada.com/assets/images/project-cover-beacon.png"
          company='Guidebook'
          year='2017-2020'
          slug='quora-messages'
        /> */}
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  subtitle,
  imgSrc,
  company,
  year,
  slug
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  company: string;
  year: string;
  slug: string;
}) => (
  <Link className={styles.card} href={`/work/${slug}`}>
    <div className={styles.cardImage}>
      <Image src={imgSrc} fill alt={title} />
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
