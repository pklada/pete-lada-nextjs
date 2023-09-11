"use client"

import React, { useEffect } from "react"
import styles from "./Layout.module.css"
import { Sidebar, SidebarContext } from "../Sidebar/Sidebar";
import { NavbarContext } from "../Navbar/Navbar";
import { Logo } from "../Logo";
import { AccentContextWrapper } from "@/contexts/AccentColorContext";

export const Layout = ({ children }: { children: React.ReactNode }) => {

    const [sidebarIsCollapsable, setSidebarIsCollapsable] = React.useState(false);
    const [isOverDark, setIsOverDark] = React.useState(true);
    const [accentRgb, setAccentRgb] = React.useState<string | undefined>(undefined)
    const [showNavbarBackground, setShowNavbarBackground] = React.useState(false);
    const [hasLoaded, setHasLoaded] = React.useState(false);
    const [topBarPercentWidth, setTopBarPercentWidth] = React.useState<number>(100);

    useEffect(() => {
        const path = window.location.pathname;

        // bit of a hack, check if we're at root where the sidebar has different behavior on mobile
        if (path === "/") {
            setHasLoaded(true);
        }
    }, [])

    return (
        <NavbarContext.Provider value={{
            isOverDark,
            accentRgb,
            setIsOverDark,
            setAccentRgb,
            showBackground: showNavbarBackground,
            setShouldShowBackground: setShowNavbarBackground
        }}>
            <AccentContextWrapper rgb={accentRgb}>
                <SidebarContext.Provider value={{
                    isCollapsable: sidebarIsCollapsable,
                    setIsCollapsable: (newValue) => { setSidebarIsCollapsable(newValue) }
                }}>
                    <LayoutContext.Provider value={{ hasLoaded, setHasLoaded }}>
                        <TopBarContext.Provider value={{ percentWidth: topBarPercentWidth, setPercentWidth: setTopBarPercentWidth }}>
                            <main className={`${styles.layout} ${hasLoaded ? styles.hasLoaded : undefined}`}>
                                <div className={styles.loader}>
                                    <Logo />
                                </div>
                                <div className={styles.topBar}>
                                    <div className={styles.topBarFill} style={{ width: topBarPercentWidth + "%" }} />
                                </div>
                                <Sidebar />
                                <div className={styles.main}>
                                    {children}
                                </div>
                            </main>
                        </TopBarContext.Provider>
                    </LayoutContext.Provider>
                </SidebarContext.Provider>
            </AccentContextWrapper>
        </NavbarContext.Provider>
    )
}

interface LayoutContext {
    hasLoaded: boolean;
    setHasLoaded: (_: boolean) => void;
}

export const LayoutContext = React.createContext<LayoutContext>({ hasLoaded: false, setHasLoaded(_) { } })

interface TopBarContext {
    percentWidth: number;
    setPercentWidth: (_: number) => void;
}

export const TopBarContext = React.createContext<TopBarContext>({ percentWidth: 100, setPercentWidth(_) { } })