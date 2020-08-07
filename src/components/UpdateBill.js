import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateBill = (props) => {
    const params = useParams()
    const { id } = params
    const [provider, setProvider] = useState("")
    const [service, setService] = useState("")
    const [duedate, setDueDate] = useState("");
    const [stillowe, setOwed] = useState("");
    const [notes, setNotes] = useState("");
    const [update, setUpdate] = useState(false);

    const BASE_URL = `https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses/${id}`

    useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(BASE_URL, {
                headers:{
                    "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json"
                }})
                setProvider(response.data.fields.provider)
                setService(response.data.fields.service)
                setDueDate(response.data.fields.duedate)
                setOwed(response.data.fields.setOwed)
                setNotes(response.data.fields.setNotes)     
        }
        callApi();
    },[])

    const updateBill = async (e) => {
        try {
          e.preventDefault();
          await axios.put(
            BASE_URL,
            {
              fields: {
                provider,
                service,
                duedate,
                stillowe: parseFloat(stillowe, 10),
                notes,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
          setUpdate(true);
          setTimeout(() => setUpdate(false), 2000);
          props.invokeFetch(true);
        } catch (error) {
          console.log(error.message);
        }
      };
    return(
        <form className="update-form" onSubmit={updateBill}>
           <h2 className='update-header'>Pay Your Bills!</h2>
           <label htmlFor="provider">Provider</label>
           <input type="text" id="provider" onChange={(e) => {setProvider(e.target.value)}} value={provider} />
           <br></br>
           <label htmlFor="service">Service</label>
           <input type="text" id="service" onChange={(e) => {setService(e.target.value)}} value={service} />
           <br></br>
           <label htmlFor="duedate">Due Date</label>
           <input type="date" id="duedate" onChange={(e) => {setDueDate(e.target.value)}} value={duedate}/>
           <br></br>
           <label htmlFor="stillowed">New Amount Owed</label>
           <input type="text" id="stillowed" onChange={(e) => {setOwed(e.target.value)}} value={stillowe}/>
           <br></br>
           <label htmlFor="notes">Notes</label>
           <textarea id="notes" onChange={(e) => {setNotes(e.target.value)}} value={notes}/>
           <br></br>
           <button className="update-button" type="submit">{update ? "Updated!" : "Update?"}</button>
        </form>
    )
}

export default UpdateBill