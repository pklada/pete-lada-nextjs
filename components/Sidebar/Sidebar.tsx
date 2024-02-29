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
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.38184 10.2676C7.68191 14.3193 12.0208 17.0507 16.9946 17.0507C21.9524 17.0507 26.2795 14.3367 28.5852 10.3064C26.2592 6.30994 21.9294 3.62354 16.9722 3.62354C12.031 3.62354 7.71319 6.29259 5.38184 10.2676Z"
        fill="#FFDD50"
      ></path>
      <path
        d="M9.17128 6.12158C12.56 8.55704 14.7687 12.5447 14.7687 17.0509C14.7687 21.557 12.56 25.5447 9.17128 27.9801C5.76561 25.5447 3.5459 21.557 3.5459 17.0509C3.5459 12.5447 5.76561 8.55704 9.17128 6.12158Z"
        fill="#95E8DA"
      ></path>
      <path
        d="M5.38184 10.2677C6.34044 8.6333 7.63488 7.21966 9.17041 6.12158C12.5125 8.5235 14.7068 12.4352 14.7666 16.865C10.7439 16.1863 7.33086 13.7011 5.38184 10.2677Z"
        fill="#59C785"
      ></path>
      <path
        d="M14.7695 30.2976C15.4864 30.4159 16.2225 30.4775 16.9729 30.4775C24.324 30.4775 30.2954 24.5699 30.3987 17.2433C29.6609 17.1164 28.9025 17.0503 28.1287 17.0503C20.8097 17.0503 14.8653 22.9649 14.7695 30.2976Z"
        fill="#000D85"
      ></path>
    </svg>
  </span>
);
