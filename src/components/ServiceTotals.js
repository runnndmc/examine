import React, { useState } from "react";
import Details from "./Details";

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

        <section onClick={() => setCurrentFilter("Blood work")}>
          Blood work
        </section>
        
        <section onClick={() => setCurrentFilter("Cardiology")}>
          Cardiology
        </section>
        <section onClick={() => setCurrentFilter("Check-up")}>Check ups</section>
        <section onClick={() => setCurrentFilter("Consultation")}>
          Consultations
        </section>
        <section onClick={() => setCurrentFilter("Radiology")}>Radiology</section>
      </div>

  
      <table className="bill">
        <tr className="bill-container">
          <th>Provider</th>
          <th>Due Date</th>
          <th>Amount Owed</th>
          <th>Notes</th>
      </tr>
          {currentRecords.map((record) => (
          <Details record={record} key={record.id} />
        ))}
      </table>
    </div>
  );
};

export default ServiceTotals;
