import React from 'react';
import styles from './OnionImage.module.css';
import { useInViewport } from 'react-in-viewport';

interface OnionImageProps {
  imgSrc: string;
  altImgSrc: string;
}

export const OnionImage = ({ imgSrc, altImgSrc }: OnionImageProps) => {
  const [offset, setOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [containerOffset, setContainerOffset] = React.useState(0);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  const animationDuration = 500;

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchend', handleMouseUp);
    window.removeEventListener('touchcancel', handleMouseUp);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    window.addEventListener('mouseup', handleMouseUp, { once: true });
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    window.addEventListener('touchend', handleMouseUp, { once: true });
    window.addEventListener('touchcancel', handleMouseUp, { once: true });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      return;
    }
    let newX = e.clientX - containerOffset;

    if (newX < 5) {
      newX = 5;
    } else if (
      containerRef.current &&
      newX > containerRef.current?.clientWidth - 5
    ) {
      newX = containerRef.current.clientWidth - 5;
    }

    setOffset(newX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) {
      return;
    }
    let newX = e.touches[0].clientX - containerOffset;

    if (newX < 5) {
      newX = 5;
    } else if (
      containerRef.current &&
      newX > containerRef.current?.clientWidth - 5
    ) {
      newX = containerRef.current.clientWidth - 5;
    }

    setOffset(newX);
  };

  const animateTo = (toValue: number) => {
    setShouldAnimate(true);
    setOffset(toValue);

    setTimeout(() => {
      setShouldAnimate(false);
    }, animationDuration);
  };

  const { inViewport } = useInViewport(containerRef, { threshold: 0.5 });

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerOffset(containerRef.current.getBoundingClientRect().left);
    }

    if (inViewport) {
      animateTo(200);
    }
  }, [inViewport]);

  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      ref={containerRef}
    >
      <div
        className={styles.topImage}
        style={{
          transform: `translateX(${offset}px)`,
          transition: shouldAnimate
            ? `transform ease ${animationDuration}ms`
            : undefined
        }}
      >
        <img
          src={imgSrc}
          style={{
            transform: `translateX(${-offset}px)`,
            transition: shouldAnimate
              ? `transform ease ${animationDuration}ms`
              : undefined
          }}
        />
      </div>
      <div className={styles.bottomImage}>
        <img src={altImgSrc} />
      </div>
      <div
        className={styles.handle}
        style={{
          transform: `translateX(${offset}px)`,
          transition: shouldAnimate
            ? `transform ease ${animationDuration}ms`
            : undefined
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={styles.handleGrabber}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 1.36914e-07L0 4L4 8V1.36914e-07Z" fill="#C4C4C4" />
            <path
              d="M7.87891 1.36914e-07L11.8789 4L7.87891 8V1.36914e-07Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
