import * as motion from "motion/react-client";

const InteractiveCard = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-[120rem] mb-[50rem]">
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          className="bg-blue-500 p-6 text-white
        rounded-lg text-center"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl">Card {item}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveCard;
