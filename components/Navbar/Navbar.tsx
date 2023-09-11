"use client"

import classNames from "classnames";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto";
import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";
import React from "react";
import Link from "next/link";

export const Navbar = () => {

    const { isOverDark, showBackground } = React.useContext(NavbarContext)

    const navbarClass = classNames({
        [styles.wrapper]: true,
        [styles.isOverDark]: isOverDark,
        [styles.showBackground]: showBackground
    })

    return (
        <div className={navbarClass}>
            <Link className={styles.navbarItem} href="/">
                <ProfilePhoto size="small" />
                <Text weight="bold" className={styles.navbarTitle}>Pete Lada</Text>
            </Link>
        </div>
    )
}

interface NavbarContextType {
    isOverDark: boolean;
    accentRgb?: string;
    setIsOverDark: (_: boolean) => void;
    setAccentRgb: (_: string | undefined) => void;
    showBackground: boolean;
    setShouldShowBackground: (_: boolean) => void;
}

export const NavbarContext = React.createContext<NavbarContextType>({
    isOverDark: true,
    accentRgb: undefined,
    setIsOverDark(_) { },
    setAccentRgb(_) { },
    showBackground: false,
    setShouldShowBackground(_) { }
});
