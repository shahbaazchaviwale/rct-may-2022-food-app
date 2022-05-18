import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/nightLife";
import { NIGHT_LIFE, DELIVERY, DELIVERY_OUT } from "../../constant";


const HomePage = () => {
  const [activeTab, setActiveTab] = useState(DELIVERY);
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  console.log('tab >>', tab)
  switch(tab){
    case DELIVERY :
      return <Delivery />;
    case DELIVERY_OUT :
      return <DiningOut />;
    case NIGHT_LIFE :
      return <NightLife />;
    default: 
    return <Delivery />;
  }
}

export default HomePage;
