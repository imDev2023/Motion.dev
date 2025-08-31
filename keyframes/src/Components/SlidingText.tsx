import * as motion from "motion/react-client";

const SlidingText = () => {
  return (
    <motion.h1
    className="text-2xl font-bold text-white "
    initial = {{ x : "-500%"}}
    animate = {{ x : 0 }}
    transition={{ duration: 3, ease:"easeInOut"}}
    >Slide in Text</motion.h1>
  )
}

export default SlidingText