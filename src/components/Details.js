import React, { useState } from "react";

import Bill from "./Bill";


const Details = (props) => {
  const { record: bill} = props;
  const [currentBill, updateCurrentBill] = useState([]);


  const setCurrentBill = (billSelected) => {
    let filteredBills = bill.filter((indvBill) => {
      return indvBill.fields.proceduredate === indvBill;
    });
    updateCurrentBill(filteredBills);
  };

  return (
      <Bill bill={bill} key={bill.id}/>
  );
  
};

export default Details; 
