'use client';

import classNames from 'classnames';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { Text } from '../Text/Text';
import styles from './Navbar.module.css';
import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const { isOverDark, showBackground, subtitle } =
    React.useContext(NavbarContext);

  const navbarClass = classNames({
    [styles.wrapper]: true,
    [styles.isOverDark]: isOverDark,
    [styles.showBackground]: showBackground,
    [styles.hasSubtitle]: subtitle!!
  });

  return (
    <div className={navbarClass}>
      <Link className={styles.navbarItem} href="/">
        <ProfilePhoto size="small" />
        <div className={styles.navbarContent}>
          <Text weight="bold" className={styles.navbarTitle}>
            Pete Lada
          </Text>
          <Text className={styles.navbarSubtitle}>{subtitle}</Text>
        </div>
      </Link>
    </div>
  );
};

interface NavbarContextType {
  isOverDark: boolean;
  accentRgb?: string;
  setIsOverDark: (_: boolean) => void;
  setAccentRgb: (_: string | undefined) => void;
  showBackground: boolean;
  setShouldShowBackground: (_: boolean) => void;
  subtitle?: string;
  setSubtitle: (_: string | undefined) => void;
}

export const NavbarContext = React.createContext<NavbarContextType>({
  isOverDark: true,
  accentRgb: undefined,
  setIsOverDark(_) {},
  setAccentRgb(_) {},
  showBackground: false,
  setShouldShowBackground(_) {},
  subtitle: undefined,
  setSubtitle(_) {}
});
