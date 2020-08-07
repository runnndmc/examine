import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const BASE_URL =
  "https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses";

const Bill = (props) => {
  const [deleted, updateDeleted] = useState(false);
  const { fields, id } = props.bill;
  console.log(fields)

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
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalAmount = fields.stillowe.toFixed(2);

  return (
    <>
    <div className="bill-table-row">
      <div className="table-body-cell">{fields.provider}</div>
      <div className="table-body-cell">{fields.service}</div>
      <div className="table-body-cell">{fields.duedate}</div>
      <div className="table-body-cell">{totalAmount}</div>
      <div className="table-body-cell">{fields.notes}</div>
      
      <button onClick={handleDelete}>{deleted ? "Deleted!" : "Delete?"}</button>
      <button><Link to={`/update/${id}`}>update</Link></button>
      </div>
    <div className="table-header-cell"></div>
    </>
  );
};
export default Bill;
