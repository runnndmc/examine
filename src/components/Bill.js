import React, { useState } from 'react'
import axios from 'axios'

const BASE_URL ='https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses'

const Bill = (props) => {
    const [deleted, updateDeleted] = useState(false)
    const { fields, id } = props.bill

    const handleDelete = (e) => {
        e.preventDefault();
        try{
            updateDeleted(true)
            setTimeout(async () => {
                await axios.delete(`${BASE_URL}/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                        'Content-Type': 'application/json',
                    }
                })
                props.invokeFetch(!props.fetchRecords)
            }, 1000)
        } catch (error){
            console.log(error.message)
        }
    }


    const totalRounded = Math.round(fields.stillowe*100)/100

    return(
        <div className='bill'>
            <div className='bill-container'>
            <h4>{fields.provider}</h4>
            <h4>{fields.duedate}</h4>
            <h3>{totalRounded}</h3>
            <p>{fields.notes}</p>
            <button onClick={handleDelete}>{deleted ? 'Paid!' : 'Pay'}</button>
            </div>
        </div>

    )
}
export default Bill                