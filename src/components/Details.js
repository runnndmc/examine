import React from "react";

import Bill from "./Bill";
import Totals from './Totals'

const Details = (props) => {
  const { record: bill } = props;
  console.log(bill)
  return (
    <div>
      <Bill bill={bill} key={bill.id}/>
      <Totals bill={bill} />
    </div>
  );
  
};

export default Details;
