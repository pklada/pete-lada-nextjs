'use client';

import { Gmail } from '@/svg/Gmail';
import { X } from '@/svg/X';
import { Github } from '@/svg/Github';
import Link from 'next/link';
import { Text, TextBlock } from '../Text/Text';
import { Wave } from '../Wave/Wave';
import styles from './Sidebar.module.css';
import React from 'react';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/utils/useIsMobile';
import { OverlayContext } from '../Overlay/Overlay';
import { Timeline, TimelineItem } from '../Timeline/Timeline';
import { Button } from '../Button/Button';

export const Sidebar = ({ className }: { className: string }) => {
  const path = usePathname();
  const isMobile = useIsMobile();

  const sidebarClass = classNames({
    [styles.sidebar]: true,
    [styles.isCollapsable]: path !== '/' && isMobile,
    [`${className}`]: className!!
  });

  return (
    <div className={sidebarClass}>
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarMain}>
          <Link href="/" className={styles.sidebarPhoto} prefetch={false}>
            <ProfilePhoto />
          </Link>
          <div>
            <Text size="large">
              I'm Pete Lada, a product design generalist.
            </Text>
          </div>
          <Wave />
          <TextBlock>
            <Text intensity="medium">
              I'm currently a product designer at{' '}
              <span className={styles.sidebarCompany}>
                <SidebarIcon /> <a href="https://perplexity.ai/">Perplexity</a>
                <span>.</span>
              </span>{' '}
              Previously, I was a staff product designer at Eco, a design lead at Quora, and co-founded and led
              product design at Guidebook, a mobile event guide platform.
            </Text>
            <Text>
              <MoreButton />
            </Text>
          </TextBlock>
        </div>
        <div className={styles.sidebarFooter}>
          <Text className={styles.copyright}>© 2023 Pete Lada</Text>
          <div className={styles.sidebarLinkWrapper}>
            <div className={styles.sidebarSocial}>
              <Link href={'https://github.com/pklada'}>
                <Github />
              </Link>
              <Link href={'https://x.com/pklada'}>
                <X />
              </Link>
              <Link href={'mailto:pklada@gmail.com'}>
                <Gmail />
              </Link>
            </div>
            <MoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreButton = () => {
  const overlayContext = React.useContext(OverlayContext);
  return (
    <Button
      text="More about me"
      className={styles.moreButton}
      secondary
      small
      includeArrow
      onClick={() => {
        overlayContext.setOverlay({
          title: 'More about me',
          content: <MoreInfo />
        });
      }}
    />
  );
};

const MoreInfo = () => (
  <TextBlock>
    <Text>
      Hey, I'm Pete Lada. I have been a product designer for over 15 years,
      working on a variety of software projects both large and personal.
    </Text>
    <Text>
      I'm an extremely technical designer, and love being able to work on
      projects where I can contribute as much to the implementation as to the
      design.
    </Text>
    <Text>
      I love to sweat the details, particularly when it comes to interface
      design. Building products which are not only functional but also beautiful
      and delightful to use is something I truly love to do.
    </Text>
    <div className={styles.sidebarTimeline}>
      <Timeline>
        <TimelineItem
          title="High School"
          location="Palo Alto, CA"
          description={
            <TextBlock>
              <Text>
                I've always been fascinated with the connection between art and
                technology. This manifested earliest while trying to hack
                together webpages to display my early pieces of art while I was
                in high school.
              </Text>
              <Text>
                That quickly turned into freelance design work, and with that
                the ability to bootstrap my own ideas.
              </Text>
            </TextBlock>
          }
          year="2003"
        />

        <TimelineItem
          title="College"
          location="Boston, MA"
          description={
            <Text>
              During college I collaborated with a colleague of mine on a
              variety of side projects, including Snoopr, a project we{' '}
              <a href="https://www.cnet.com/tech/services-and-software/snoopr-does-digg-for-deals/">
                likened to "Digg for deals"
              </a>
              . This was sold to RetailMeNot.
            </Text>
          }
          year="2008"
        />

        <TimelineItem
          title="Guidebook"
          location="San Francisco, CA"
          description={
            <Text>
              I co-founded Guidebook after college, and ran product design there
              for nearly 9 years. We grew the company from nothing to a $12MM
              ARR business, which I am deeply proud of. Guidebook is still going
              strong, but in 2019 I decided to turn my attention to new
              projects.
            </Text>
          }
          year="2010"
        />

        <TimelineItem
          title="Quora"
          location="Mountain View, CA"
          description={
            <Text>
              I joined Quora, which allowed me to work on a massive product,
              tackling design and platform challenges at scale.
            </Text>
          }
          year="2020"
        />

        <TimelineItem
          title="Eco"
          location="Distributed"
          description={
            <Text>
              I'm currently at <a href="http://eco.org">Eco</a>, back to my
              start-up roots, where I get to build a web3 fintech product from
              the ground up.
            </Text>
          }
          year="2022"
        />
      </Timeline>
    </div>
    <Text>
      Outside of work, I love running and long walks, gardening, good beer and
      coffee, and my growing family.
    </Text>
    <Text>
      <a href="mailto:pklada@gmail.com">Let's talk</a>
    </Text>
  </TextBlock>
);

const SidebarIcon = () => (
  <span className={styles.sidebarIcon}>
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="white"/>
    </svg>
  </span>
);
