'use client';

import { AccentContextWrapper } from '@/contexts/AccentColorContext';
import React, { ReactNode, useEffect } from 'react';
import { Logo } from '../Logo';
import { NavbarContext } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.css';
import { useIsMobile } from '@/utils/useIsMobile';
import { Overlay, OverlayContext } from '../Overlay/Overlay';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOverDark, setIsOverDark] = React.useState(true);
  const [accentRgb, setAccentRgb] = React.useState<string | undefined>(
    undefined
  );
  const [showNavbarBackground, setShowNavbarBackground] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [topBarPercentWidth, setTopBarPercentWidth] =
    React.useState<number>(100);

  const [navbarSubtitle, setNavbarSubtitle] = React.useState<
    string | undefined
  >(undefined);

  const [isOverlayOpen, setOverlayOpen] = React.useState(false);
  const [overlayContent, setOverlay] = React.useState<{
    title: string | undefined;
    content: ReactNode;
  }>({ title: undefined, content: undefined });

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <OverlayContext.Provider
      value={{
        isOpen: isOverlayOpen,
        setOverlay: (overlay) => {
          setOverlay(overlay);
          setOverlayOpen(true);
        }
      }}
    >
      <NavbarContext.Provider
        value={{
          isOverDark,
          accentRgb,
          setIsOverDark,
          setAccentRgb,
          showBackground: showNavbarBackground,
          setShouldShowBackground: setShowNavbarBackground,
          subtitle: navbarSubtitle,
          setSubtitle: setNavbarSubtitle
        }}
      >
        <AccentContextWrapper rgb={accentRgb}>
          <LayoutContext.Provider value={{ hasLoaded, setHasLoaded }}>
            <TopBarContext.Provider
              value={{
                percentWidth: topBarPercentWidth,
                setPercentWidth: setTopBarPercentWidth
              }}
            >
              <main
                className={`${styles.layout} ${
                  hasLoaded ? styles.hasLoaded : undefined
                }`}
              >
                <div className={styles.loader}>
                  <Logo />
                </div>
                <Overlay
                  isOpen={isOverlayOpen}
                  content={overlayContent.content}
                  title={overlayContent.title}
                  onClose={() => {
                    setOverlayOpen(false);
                  }}
                />
                <div className={styles.topBar}>
                  <div
                    className={styles.topBarFill}
                    style={{ width: topBarPercentWidth + '%' }}
                  />
                </div>
                <Sidebar className={`${styles.sidebar}`} />
                <div className={styles.main}>{children}</div>
              </main>
            </TopBarContext.Provider>
          </LayoutContext.Provider>
        </AccentContextWrapper>
      </NavbarContext.Provider>
    </OverlayContext.Provider>
  );
};

interface LayoutContext {
  hasLoaded: boolean;
  setHasLoaded: (_: boolean) => void;
}

export const LayoutContext = React.createContext<LayoutContext>({
  hasLoaded: false,
  setHasLoaded(_) {}
});

interface TopBarContext {
  percentWidth: number;
  setPercentWidth: (_: number) => void;
}

export const TopBarContext = React.createContext<TopBarContext>({
  percentWidth: 100,
  setPercentWidth(_) {}
});
