import React from "react";
import Bill from "./Bill";

const ServiceDetails = (props) => {
  const { record: bill } = props;

  return (
      <Bill bill={bill} key={bill.id} />
  );
};

export default ServiceDetails;
