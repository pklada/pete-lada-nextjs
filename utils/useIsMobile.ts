import MobileDetect from 'mobile-detect';
import React from 'react';

export const getIsSsrMobile = (context: any) => {
  const md = new MobileDetect(context.req.headers['user-agent']);

  return Boolean(md.mobile());
};

export const IsSsrMobileContext = React.createContext(false);

export const useIsMobile = () => {
  const isSsrMobile = React.useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 800;

  return isSsrMobile || isBrowserMobile;
};

interface UseWindowSizeType {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<UseWindowSizeType>({
    width: undefined,
    height: undefined
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
