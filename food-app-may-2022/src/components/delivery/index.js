import React from "react";
import { restaurants } from "../../data/restaurants";
import ExplorerSection from "../common/explorerSection";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollection from "./deliveryCollection";
import TopBrand from "./topBrand";
const Delivery = () => {
  const deliveryFilters = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
      id: 6,
      title: "Great Offers",
    },
  ];
  return (
    <>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <ExplorerSection restaurantList={restaurants} collection_title={'Delivery Restaurant in Bengalore'}/>
    </>
  );
};

export default Delivery;
