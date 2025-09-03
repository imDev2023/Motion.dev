import * as motion from "motion/react-client";

const LoaderProject = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative w-56 h-56 border-8 border-t-8
        border-blue-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-8 border-blue-300
            border-solid rounded-full"
          style={{ borderTopColor: "transparent" }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LoaderProject;
