import * as motion from "motion/react-client";

const DraggableBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-green-500 rounded-lg shadow-lg justify-center flex items-center font-bold text-red-600"
      drag
      dragConstraints={{ left: 0, right: 300, top: -300, bottom: 300 }}
    >
      Drag Me!
    </motion.div>
  );
};

export default DraggableBox;
