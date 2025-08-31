import * as motion from "motion/react-client";

const ColorChangeSquare = () => {
  return (
    <motion.div
    className="w-32 h-32 rounded-2xl"
    animate= {{ backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"], 
      scale: [0.1,13,0.1] }}
    
    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear"}}
    ></motion.div>
  )
}

export default ColorChangeSquare