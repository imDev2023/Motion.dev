import * as motion from "motion/react-client";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.5 } },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="mb-2 p-5 bg-amber-500"
          variants={staggeredVariants}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
