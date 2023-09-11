"use client"

import React, { useEffect } from "react";

import classNames from "classnames";
import { Text } from "../Text/Text";
import styles from "./ZoomableImage.module.css";

import { motion } from "framer-motion";
import { useDoubleTap } from 'use-double-tap';
import ModalWrapper from "../ModalWrapper";

interface ZoomableImageProps {
    imgSrc?: string,
    imgSrc2x?: string,
    subtitle: string,
    videoSrc?: string,
}

interface ImageOverlayProps {
    imgSrc?: string,
    imgSrc2x?: string,
    onClose: () => void,
    subtitle: string,
    videoSrc?: string,
}

export const ZoomableImage = ({ imgSrc, subtitle, imgSrc2x, videoSrc }: ZoomableImageProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        document.documentElement.classList.add("overlay-open");
        setIsOpen(true);
    }

    const handleClose = () => {
        document.documentElement.classList.remove("overlay-open");
        setIsOpen(false);
    }

    return (
        <>
            <div className={styles.image}>
                {imgSrc &&
                    <img src={imgSrc} srcSet={imgSrc2x ? `${imgSrc}, ${imgSrc2x} 2x` : undefined} onClick={handleClick} />
                }
                {videoSrc &&
                    <video autoPlay loop muted playsInline onClick={handleClick}>
                        <source src={videoSrc} />
                    </video>
                }
                <div className={styles.zoomIcon}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875ZM10.2646 12.8105H11.8379V14.3838C11.8379 14.7705 12.1455 15.0781 12.5322 15.0781C12.9189 15.0781 13.2178 14.7705 13.2178 14.3838V12.8105H14.7998C15.1865 12.8105 15.4941 12.5029 15.4941 12.1162C15.4941 11.7295 15.1865 11.4219 14.7998 11.4219H13.2178V9.84863C13.2178 9.46191 12.9189 9.1543 12.5322 9.1543C12.1455 9.1543 11.8379 9.46191 11.8379 9.84863V11.4219H10.2646C9.87793 11.4219 9.57031 11.7295 9.57031 12.1162C9.57031 12.5029 9.87793 12.8105 10.2646 12.8105Z" fill="#1C1C1E" />
                    </svg>
                </div>
            </div>
            <ModalWrapper isShowing={isOpen}>
                <ImageOverlay subtitle={subtitle} imgSrc={imgSrc} imgSrc2x={imgSrc2x} onClose={handleClose} videoSrc={videoSrc} />
            </ModalWrapper>
        </>
    )
}

enum ZoomType {
    "full",
    "fit"
}

const ImageOverlay = ({ imgSrc, imgSrc2x, onClose, subtitle, videoSrc }: ImageOverlayProps) => {
    const [zoomType, setZoomType] = React.useState<ZoomType>(ZoomType.fit)
    const [offset, _setOffset] = React.useState({ x: 0, y: 0 })
    const offsetRef = React.useRef(offset)
    const setOffset = (newOffset: {x: number, y: number}) => {
        offsetRef.current = newOffset;
        _setOffset(newOffset);
    }
    const [startOffset, setStartOffset] = React.useState({ x: 0, y: 0 })
    const [startDrag, setStartDrag] = React.useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = React.useState(false);
    const [isHidingUI, setIsHidingUI] = React.useState(false);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);

    const handleZoomClick = (type: ZoomType, e: React.MouseEvent) => {
        setZoomType(type)
        e.stopPropagation()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    }

    useEffect(() => {
        if (zoomType === ZoomType.fit) {
            setOffset({ x: 0, y: 0 })
        }
    }, [zoomType]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown, { once: true });

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    const imageContainerRef = React.useRef<HTMLDivElement>(null)

    const containerClass = classNames({
        [styles.overlay]: true,
        [styles.zoomFit]: zoomType === ZoomType.fit,
        [styles.zoomFull]: zoomType === ZoomType.full,
        [styles.isDragging]: isDragging,
        [styles.hidingUI]: isHidingUI
    })

    const handleImageDrag = (e: React.MouseEvent) => {
        if (!isDragging) { return }

        const newX = startOffset.x + e.clientX - startDrag.x;
        const newY = startOffset.y + e.clientY - startDrag.y;

        setOffset({ x: newX, y: newY })
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) { return }
        if (e.touches.length > 1) { return }

        const newX = startOffset.x + e.touches[0].clientX - startDrag.x;
        const newY = startOffset.y + e.touches[0].clientY - startDrag.y;

        setOffset({ x: newX, y: newY })
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartOffset({ x: offset.x, y: offset.y })
        setStartDrag({ x: e.touches[0].clientX, y: e.touches[0].clientY })

        window.addEventListener("touchend", handleMouseUp, { once: true })
        window.addEventListener("touchcancel", handleMouseUp, { once: true })
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 2) { return } // right click

        setIsDragging(true)
        setStartOffset({ x: offset.x, y: offset.y })
        setStartDrag({ x: e.clientX, y: e.clientY })

        window.addEventListener("mouseup", handleMouseUp, { once: true })
        window.addEventListener("mouseleave", handleMouseUp, { once: true })
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("mouseleave", handleMouseUp)
        window.removeEventListener("touchend", handleMouseUp)
        window.removeEventListener("touchcancel", handleMouseUp)

        if (videoSrc && offsetRef.current.x !== 0 && offsetRef.current.y !== 0) {
            withAnimation(() => {
                setOffset({ x: 0, y: 0 })
            });
        }
    }

    const withAnimation = (block: () => void) => {
        if (imageContainerRef.current) {
            imageContainerRef.current.addEventListener("transitionend", () => { setShouldAnimate(false); }, { once: true })
        }

        setShouldAnimate(true);
        block();
    }

    const handleDoubleTap = useDoubleTap(() => {
        setZoomType(zoomType === ZoomType.fit ? ZoomType.full : ZoomType.fit);
    });

    const handleContainerClick = () => {
        setIsHidingUI(!isHidingUI)
    }

    return (
        <motion.div
            className={containerClass}
            onMouseMove={handleImageDrag}
            onClick={handleContainerClick}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{
                duration: 0.15
            }}
        >
            <div className={styles.overlayNav}>
                <div>
                    {imgSrc &&
                        <>
                            <button className={zoomType === ZoomType.full ? styles.isSelected : undefined} onClick={handleZoomClick.bind(this, ZoomType.full)}>100%</button>
                            <button className={zoomType === ZoomType.fit ? styles.isSelected : undefined} onClick={handleZoomClick.bind(this, ZoomType.fit)}>Fit</button>
                        </>
                    }
                </div>

                {subtitle &&
                    <div className={styles.caption}>
                        <Text>{subtitle}</Text>
                    </div>
                }
                <div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
            <div
                className={`${styles.itemWrapper} ${shouldAnimate ? styles.withAnimation : undefined}`}
                ref={imageContainerRef}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
                {...handleDoubleTap}
            >
                {imgSrc &&
                    <img
                        src={imgSrc}
                        srcSet={imgSrc2x ? `${imgSrc}, ${imgSrc2x} 2x` : undefined}
                    />
                }

                {videoSrc &&
                    <video autoPlay loop muted playsInline>
                        <source src={videoSrc} />
                    </video>
                }
            </div>
        </motion.div>
    )
}