import * as motion from "motion/react-client";

const SpinningIcon = () => {
  return (
    <motion.img 
    className="object-fill"
    src="https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    animate = {{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear"}}
    />
  )
}

export default SpinningIcon