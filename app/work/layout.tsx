'use client'

import React, { useContext } from "react";
import styles from "./project.module.css";
import { useIsMobile } from "@/utils/useIsMobile";
import { SidebarContext } from "@/components/Sidebar/Sidebar";
import { Navbar } from "@/components/Navbar/Navbar";
import { LayoutContext } from "@/components/Layout/Layout";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const sidebarContext = useContext(SidebarContext);
  const layoutContext = useContext(LayoutContext);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (isMobile) {
      sidebarContext.setIsCollapsable(true);
    }
    layoutContext.setHasLoaded(true);
  }, [isMobile])

  return (
    <div>
      {isMobile &&
        <Navbar />
      }
      {children}
    </div>
  )
}

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles.sectionTitle}>{children}</h3>
)