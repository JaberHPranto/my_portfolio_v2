import { useEffect, useState } from "react";

const useMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile;
};

export default useMobileDevice;
