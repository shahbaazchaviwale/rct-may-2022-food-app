import React from "react";
import ExplorerCard from "./explorerCard";
import './explorerSection.css'
const ExplorerSection = ({ restaurantList, collection_title }) => {
    let j =1;
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collection_title}</div>
      <div className="explorer-grid">
        {restaurantList.map((restaurant, i) => {
          return <ExplorerCard key={j++} restaurant={restaurant} i={i}/>;
        })}
      </div>
    </div>
  );
};

export default ExplorerSection;
