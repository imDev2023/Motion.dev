import * as motion from "motion/react-client";

const BouncingBall = () => {
  return (
    <motion.div 
    // className="w-16 h-16 bg-red-500 rounded-full"
    className="w-0 h-0 border-t-[75px] border-t-red-500 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent"
    animate={{ y: [500, -500, 500], scale: [1, 3, 1]}}
    transition={{ duration : 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}}
    ></motion.div>
  )
}

export default BouncingBall