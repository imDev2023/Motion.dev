import DynamicList from "@/Components/DynamicList";
import FadeInComponent from "@/Components/FadeInComponent";
import SlidingMenu from "@/Components/SlidingMenu";
import ToggleSwitch from "@/Components/ToggleSwitch";
import Tooltip from "@/Components/Tooltip";
import { Dynalight } from "next/font/google";
import React from "react";

const Home = () => {
  return (
    <section>
      {/* <FadeInComponent/> */}
      {/* <SlidingMenu /> */}
      {/* <Tooltip/> */}
      {/* <ToggleSwitch/> */}
      <DynamicList/>
    </section>
  );
};

export default Home;
