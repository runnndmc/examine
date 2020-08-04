import React, { useState } from "react";
import ServiceDetails from "./ServiceDetails";

const ServiceTotals = (props) => {
  const { records } = props;
  const [currentRecords, updateCurrentRecords] = useState([]);
  console.log(props);

  const setCurrentFilter = (currentFilter) => {
    let filteredRecords = records.filter((record) => {
      return record.fields.service === currentFilter;
    });

    updateCurrentRecords(filteredRecords);
  };

  const showProgress = () => {
    
  }
 
  return (
    <div>
      <h1> Overall Service Totals </h1>
      
      <div className="service-buttons">

        <button onClick={() => setCurrentFilter("Blood work")}>
          Blood work {showProgress}
        </button>
        

        <button onClick={() => setCurrentFilter("Cardiology")}>
          Cardiology
        </button>
        <button onClick={() => setCurrentFilter("Check-up")}>Check ups</button>
        <button onClick={() => setCurrentFilter("Consultation")}>
          Consultations
        </button>
        <button onClick={() => setCurrentFilter("Radiology")}>Radiology</button>
      </div>

  
      <table className="bill">
        <tr className="bill-container">
          <th>Provider</th>
          <th>Due Date</th>
          <th>Amount Owed</th>
          <th>Notes</th>
      </tr>
        {currentRecords.map((record) => (
          <ServiceDetails record={record} key={record.id} />
        ))}
      </table>
    </div>
  );
};

export default ServiceTotals;
