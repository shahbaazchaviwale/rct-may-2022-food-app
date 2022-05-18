import React from "react";
import FilterItem from "./filterItem";
import './filters.css';

const Filters = ({filterList}) => {
    return <div className="filters">
        {filterList && filterList.map( (filter) => {
            return <FilterItem  key={filter.id} filter={filter} />;
        })}
    </div>
}

export default Filters;