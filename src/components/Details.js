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
      <UpdateBill bill={bill} key={bill.id}/>

      <Link to='/updateBill'>
        <button>edit</button>
      </Link>
    </div>
  );
  
};

export default Details;
