import * as motion from "motion/react-client";

const text = "Farhan Basharat"

const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const StaggeredTextReveal = () => {
  return (
    <motion.h1
    initial= 'hidden'
    animate='visible'
    variants={{
      visible: {
        transition: {staggerChildren: 0.2}
      }
    }}
    className="text-4xl font-bold text-white"

    >
      {text.split("").map((txt, index) => (
        <motion.span key={index}
        variants={staggeredVariants}
        >
          {txt}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default StaggeredTextReveal