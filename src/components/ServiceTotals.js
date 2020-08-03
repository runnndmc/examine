import React, { useState } from 'react'
import Bill from './Bill'

const ServiceTotals = (props) => {

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



    return(
        <div>
            <h1> Overall Service Totals </h1>
            <button onClick={ () => setCurrentFilter('Blood work')} >Blood work</button>
            <button onClick={ () => setCurrentFilter('Cardiology')} >Cardiology</button>
            {currentRecord.map((record) => (
                <Bill 
                    record={record}
                />
            ))}
        </div>
    )
}

export default ServiceTotals