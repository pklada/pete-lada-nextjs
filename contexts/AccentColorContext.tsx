"use client"

import { NavbarContext } from "@/components/Navbar/Navbar";
import React from "react";
import tinycolor from "tinycolor2";

interface AccentColorType {
    rgb?: string;
    isDark: boolean;
}

interface AccentColorWrapperType {
    rgb?: string;
    children: React.ReactNode;
}

export const AccentColorContext = React.createContext<AccentColorType>({
    rgb: "20, 20, 20",
    isDark: true
})

export const AccentContextWrapper = ({ rgb, children }: AccentColorWrapperType) => {

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [colorIsDark, setColorIsDark] = React.useState(false);
    const navbarContext = React.useContext(NavbarContext);

    React.useEffect(() => {
        if (!rgb) {
            if (wrapperRef.current) {
                wrapperRef.current.style.removeProperty(`--color-accent-rgb`);
                wrapperRef.current.style.removeProperty(`--color-accent`);
                wrapperRef.current.style.removeProperty(`--color-accent-medium`);
                wrapperRef.current.style.removeProperty(`--color-accent-light`);
                wrapperRef.current.style.removeProperty(`--color-accent-xlight`);
            }
        }

        if (wrapperRef.current && rgb) {
            wrapperRef.current.style.setProperty(`--color-accent-rgb`, rgb);
            wrapperRef.current.style.setProperty(`--color-accent`, `rgba(${rgb}, 1)`);
            wrapperRef.current.style.setProperty(`--color-accent-medium`, `rgba(${rgb}, .5)`);
            wrapperRef.current.style.setProperty(`--color-accent-light`, `rgba(${rgb}, .1)`);
            wrapperRef.current.style.setProperty(`--color-accent-xlight`, `rgba(${rgb}, .05)`);

            setColorIsDark(tinycolor(rgb).isDark())
            navbarContext.setIsOverDark(tinycolor(rgb).isDark())
            navbarContext.setAccentRgb(rgb);
        }

    }, [rgb])

    return (
        <AccentColorContext.Provider value={{ rgb: rgb, isDark: colorIsDark }}>
            <div ref={wrapperRef}>
                {children}
            </div>
        </AccentColorContext.Provider>
    )
}