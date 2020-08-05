import React from "react";

import Bill from "./Bill";


const Details = (props) => {
  const { record: bill } = props;
  console.log(bill)


  return (
    <div>
      <Bill bill={bill} key={bill.id}/>
     
    </div>
  );
  
};

export default Details;
