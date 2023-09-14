'use client';

import { Gmail } from '@/svg/Gmail';
import { X } from '@/svg/X';
import { Github } from '@/svg/Github';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Text, TextBlock } from '../Text/Text';
import { Wave } from '../Wave/Wave';
import styles from './Sidebar.module.css';
import React from 'react';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';

export const Sidebar = () => (
  <SidebarContext.Consumer>
    {(value) => (
      <div
        className={`${styles.sidebar} ${
          value.isCollapsable ? styles.isCollapsable : ''
        }`}
      >
        <div className={styles.sidebarInner}>
          <div className={styles.sidebarMain}>
            <Link href="/" className={styles.sidebarPhoto}>
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
                I'm currently a staff product designer at{' '}
                <span className={styles.sidebarCompany}>
                  <SidebarIcon /> <a href="https://ecoapp.com/">Eco</a>
                  <span>.</span>
                </span>{' '}
                Previously, I was a design lead at Quora, and co-founded and led
                product design at Guidebook, a mobile event guide platform.
              </Text>
              <Text intensity="medium">
                While I'm not currently looking for new opportunities, you can{" "}
                <a href="/pete-lada-resume-2020.pdf" target='_blank'>view my resume</a> if interested.
              </Text>
            </TextBlock>
          </div>
          <div className={styles.sidebarFooter}>
            <Text className={styles.copyright}>© 2023 Pete Lada</Text>
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
          </div>
        </div>
      </div>
    )}
  </SidebarContext.Consumer>
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

export interface SidebarContextProps {
  isCollapsable: boolean;
  setIsCollapsable: (_: boolean) => void;
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  isCollapsable: false,
  setIsCollapsable(_) {}
});
