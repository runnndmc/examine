import React, { useState, useEffect } from 'react'

import Bill from './Bill'

const ServiceDetails = (props) => {
    const { records } = props
    const [currentRecord, updateCurrentRecord] = useState([])
   
    
    const setCurrentFilter = (currentFilter) => {
     let filteredRecords = records.filter((record)=> {
         if (record.fields.service === currentFilter){
             return record
         }
     })
        console.log(filteredRecords)
       updateCurrentRecord(filteredRecords)  
    }

    return (
        <div>
            <button onClick={ () => setCurrentFilter('Blood work')} >bloodwork</button>
            <button onClick={ () => setCurrentFilter('Cardiology')} >Cardiology</button>
            <h1> services </h1>
            {currentRecord.map((record) => (
                <Bill 
                    record={record}
                />
            ))}
        </div>

    )
}

export default ServiceDetails