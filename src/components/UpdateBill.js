import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateBill = (props) => {
    const params = useParams()
    const [currentRecord, updateCurrentRecord] = useState({})

    useEffect(() => {
        const { id } = params
        const callAPI = async () => {
            const data = await axios.get(`https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses/${id}`, 
                {headers:{
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json"
                }})
            console.log(data)
        }
        callAPI();
    },[])

    return(
        <div>
            <h2>hi</h2>
       </div>
    )
}

export default UpdateBill




