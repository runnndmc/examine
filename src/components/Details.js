import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Bill from "./Bill";
import UpdateBill from "./UpdateBill";


const Details = (props) => {
  const { record: bill} = props;
  console.log(bill)
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
