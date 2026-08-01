import { motion } from "framer-motion";

const Heartbeat = () => {
  return (
    <svg
      className="heartbeat"
      viewBox="0 0 400 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="
                M0 20
                H140
                L155 20
                L165 5
                L180 35
                L195 20
                H400
                "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: [0, 1],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default Heartbeat;
