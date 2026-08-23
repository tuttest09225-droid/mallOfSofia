import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import heroImage from "../../assets/mall-of-sofia.jpg";

export default function HomeBackground() {
  const { scrollY } = useScroll();

  const [pageHeight, setPageHeight] = useState(1);
  const [footerVisible, setFooterVisible] = useState(false);

  /*
   * Calculate total scrollable page height.
   */
  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(
        Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1,
        ),
      );
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  /*
   * Hide the background when the footer enters the viewport.
   */
  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.01,
      },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const progress = useTransform(scrollY, [0, pageHeight], [0, 1]);

  /*
   * Image:
   *
   * 0%   -> hidden
   * 13%  -> hidden
   * 22%  -> starts appearing
   * 35%  -> strongest
   * 55%  -> starts fading
   * 80%  -> almost gone
   * 100% -> gone
   */
  const imageOpacity = useTransform(
    progress,
    [0, 0.13, 0.22, 0.35, 0.55, 0.8, 1],
    [0, 0, 0.08, 0.16, 0.12, 0.05, 0],
  );

  /*
   * Black atmospheric wash.
   */
  const washOpacity = useTransform(
    progress,
    [0, 0.13, 0.22, 0.35, 0.55, 0.8, 1],
    [0, 0, 0.15, 0.35, 0.55, 0.78, 0.92],
  );

  /*
   * Image movement.
   */
  const y = useTransform(
    progress,
    [0, 1],
    ["0%", "-10%"],
  );

  const scale = useTransform(
    progress,
    [0, 0.25, 1],
    [1.05, 1.02, 1],
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      animate={{
        opacity: footerVisible ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      <motion.img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{
          opacity: imageOpacity,
          y,
          scale,
        }}
      />

      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          opacity: washOpacity,
        }}
      />
    </motion.div>
  );
}