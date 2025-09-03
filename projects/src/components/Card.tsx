// For Horizontal Scroll
// const Card = ({ card }: any) => {
//     return (
//       <div
//         key={card.id}
//         className="group relative w-[15rem] h-[15rem] overflow-hidden
//          bg-neutral-200"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${card.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="absolute inset-0 z-0 transition-transform duration-300
//            group-hover:scale-110"
//         ></div>
//       </div>
//     );
//   };
//   export default Card;

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const Card = ({ title, description, imageUrl }: CardProps) => {
    return (
      <div className="flex flex-col m-5 bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-28 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;