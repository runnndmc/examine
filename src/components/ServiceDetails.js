import React from "react";
import Bill from "./Bill";

const ServiceDetails = (props) => {
  const { record: bill } = props;

  return (
    <div>
      <Bill
        bill={bill}
        key={bill.id}
      />
    </div>
  );
};

export default ServiceDetails;
