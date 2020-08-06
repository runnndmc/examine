import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateBill = (props) => {
    const params = useParams()
    const [currentRecord, updateCurrentRecord] = useState({})
    const [provider, setProvider] = useState("")
    const [service, setService] = useState("")
    const [duedate, setDueDate] = useState("");
    const [stillowe, setOwed] = useState("");
    const [notes, setNotes] = useState("");
    const [edit, setEdit] = useState(false);
 

    useEffect(() => {
        const { id } = params
        const callApi = async () => {
            const data = await axios.get(`https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses/${id}`, {
                headers:{
                    "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json"
                }})
                return data
/*            params.setItem('provider', provider)
           .setItem('service', service)
           .setItem('duedate', duedate)
           .setItem('stillowe', stillowe)
           .setItem('notes', notes) */
            
        }
        callApi();
    },[])
    
    return(
        <form className="update-form">
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
           <label htmlFor="stillowed">Amount Paid</label>
           <input type="text" id="stillowed" onChange={(e) => {setOwed(e.target.value)}} value={stillowe}/>
           <br></br>
           <label htmlFor="notes">Notes</label>
           <textarea id="notes" onChange={(e) => {setNotes(e.target.value)}} value={notes}/>
           <br></br>
           <input type="button" value="Update Bill" onClick={updateCurrentRecord}></input>
        </form>
    )
}

export default UpdateBill



/* 
fields: {
    provider,
    service,
    duedate,
    stillowe,
    notes
} */