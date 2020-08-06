import React, { useState } from "react";

import Details from "./Details";
import Totals from './Totals'


const ServiceTotals = (props) => {
  const { records } = props;
  const [currentRecords, updateCurrentRecords] = useState([]);

  const setCurrentFilter = (currentFilter) => {
    let filteredRecords = records.filter((record) => {
      return record.fields.service === currentFilter;
    });
    updateCurrentRecords(filteredRecords);
  };
 
  return (
    <div>
      <h1> Overall Service Totals </h1>

      <div className="service-buttons">
        <section onClick={() => setCurrentFilter("Blood work")}>Blood work</section>
        <section onClick={() => setCurrentFilter("Cardiology")}>Cardiology</section>
        <section onClick={() => setCurrentFilter("Check-up")}>Check ups</section>
        <section onClick={() => setCurrentFilter("Consultation")}>Consultations</section>
        <section onClick={() => setCurrentFilter("Radiology")}>Radiology</section>
      </div>

  
      <div className="bill-table">
        <div className="bill-table-caption"> Service Title</div>
          <div className="bill-table-header"></div>
            <div className="table-header-cell">Provider</div>
            <div className="table-header-cell">Due Date</div>
            <div className="table-header-cell">Amount Owed</div>
            <div className="table-header-cell">Notes</div>
          <div className="bill-table-body"></div>
        
        {currentRecords.map((record) => (
              <Details 
                record={record} 
                key={record.id} 
            />
          ))}
        {currentRecords.length > 0 && <Totals bills={currentRecords} />}
      </div>
    </div>
  );
};

export default ServiceTotals;
