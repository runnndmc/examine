import React, { useState } from "react";
import axios from "axios";

const BASE_URL =
  "https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses";

const Bill = (props) => {
  const [deleted, updateDeleted] = useState(false);
  const { fields, id } = props.bill;
  

  const handleDelete = (e) => {
    e.preventDefault();
    try {
      updateDeleted(true);
      setTimeout(async () => {
        await axios.delete(`${BASE_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        });
        /*    props.invokeFetch(!props.fetchRecords) */
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalAmount = (fields.stillowe).toFixed(2)

  return (
    <div class="bill-table-row">
        <div class="table-body-cell">{fields.provider}</div>
        <div class="table-body-cell">{fields.duedate}</div>
        <div class="table-body-cell">{totalAmount}</div>
        <div class="table-body-cell">{fields.notes}</div>
    </div>
  );
};
export default Bill;
