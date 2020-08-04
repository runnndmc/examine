import React from "react";
import Bill from "./Bill";

const Details = (props) => {
  const { record: bill } = props;

  return (
      <Bill 
        bill={bill} 
        key={bill.id}
      />
  );
};

export default Details;
