import * as motion from "motion/react-client";
import Box from "@/components/Box";
import BouncingCircle from "@/components/BouncingCircle";
import ComplexAnimation from "@/components/ComplexAnimation";
import SpinningIcon from "@/components/SpinningIcon";
import SkewRectangle from "@/components/SkewRectangle";
import ScrollIndicator from "@/components/ScrollIndicator";
import LoaderProject from "@/components/LoaderProject";
import Carousel from "@/components/Carousel";
import DraggableCard from "@/components/DraggableCard";
import Sidebar from "@/components/Sidebar";
import ScrollAnimation from "@/components/ScrollAnimation";
import ScrollCarousel from "@/components/ScrollCarousel";


const page = () => {
  return (
    <>
    <ScrollCarousel/>
    {/* <ScrollAnimation/> */}
    {/* <div    className="flex justify-center items-center h-screen w-full 
    bg-gray-950">
      <Sidebar/>
    </div> */}

      {/* <div className="flex justify-center items-center h-[100vh] bg-[#f3f3f3]">
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f5ee7d 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}
    
      {/* <Carousel/> */}
      {/* <ScrollIndicator/> */}
      {/* <LoaderProject/> */}
      {/* <Box/> */}
      {/* <BouncingCircle/> */}
      {/* <ComplexAnimation/> */}
      {/* <SpinningIcon/> */}
      {/* <SkewRectangle/> */}
    </>
  );
};

export default page;
