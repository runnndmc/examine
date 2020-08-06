import React from "react";
import { Link } from 'react-router-dom'

import Bill from "./Bill";
import UpdateBill from "./UpdateBill";


const Details = (props) => {
  const { record: bill} = props;
  console.log(bill)


  return (
    <div>
      <Bill bill={bill} key={bill.id}/>

      <Link to='/update'>
        <button onClick={() =>  <UpdateBill bill={bill} key={bill.id}/>}>edit</button>
      </Link>
    </div>
  );
  
};

export default Details;
