import React, { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses'

const AddBill = (props) => {

    const [provider, updateProvider] = useState('')
    const [service, updateService] = useState('')
    const [submitted, updateSubmitted] = useState(false)



    const createBill = async (e) => {
        try{
            e.preventDefault()
            await axios.post(BASE_URL, {
                fields: {
                    provider,
                    service,
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            })
            updateSubmitted(true)
            setTimeout(() => updateSubmitted(false), 2000)
            props.invokeFetch(true);
        } catch (error) {
            console.log(error.message)
        }
    }
    

    return(
        <form onSubmit={createBill}>
            <label htmlFor='provider'>Provider</label>
            <input type='text' id='provider' onChange={e => updateProvider(e.target.value)}/>
            <br></br>
            <label htmlFor='service'>Service Type</label>
            <input type='text' onChange={e => updateService(e.target.value)} />
            <button type='submit'>{submitted ? 'Submitted!' : 'Add Bill'}</button>
        </form>
    )
}

export default AddBill 