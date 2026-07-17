import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
function ScrollIndicator() {
  return (
    <div className="scroll-wrapper">
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaArrowDown />
      </motion.div>
    </div>
  );
}
export default ScrollIndicator;
