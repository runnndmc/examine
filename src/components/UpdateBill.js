import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateBill = (props) => {
    const params = useParams()
    const [currentRecord, updateCurrentRecord] = useState({})
    const [provider, setProvider] = useState('')
    const [service, setService] = use


 
    useEffect(() => {
        const { id } = params
        const callApi = async () => {
            const data = await axios.get(`https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses/${id}`, {
                fields: {
                    provider,
                    service,
                }
            }, {
                headers:{
                    "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json"
                }})
            console.log(data)
        }
        callApi();
    },[])
    
    return(
        <form onSubmit={updateBill} className="update-form">
           <label htmlFor="provider">Provider</label>
           <input type="text" id="provider" onChange={(e) => updateCurrentRecord(e.target.value)} />
           <br></br>
           <label htmlFor="service">Service Type</label>
      <input type="text" onChange={(e) => updateService(e.target.value)} />
      <br></br>
      <label htmlFor="date">Due Date</label>
      <input type="date" onChange={(e) => updateDueDate(e.target.value)} />
      <br></br>
      <label htmlFor="stillowe">Amount Owed</label>
      <input type="text" onChange={(e) => updateOwed(e.target.value)} />
      <br></br>
      <label htmlFor="notes">Notes</label>
      <textarea onChange={(e) => updateNotes(e.target.value)} />
      <button type="submit">{submitted ? "Submitted!" : "Add Bill"}</button>
    </form>
       </div>
    )
}

export default UpdateBill




