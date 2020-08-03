import React, { useState } from 'react'
import ServiceDetails from './ServiceDetails'

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
            <button onClick={ () => setCurrentFilter('Check-up')} >Check ups</button>
            <button onClick={ () => setCurrentFilter('Consultation')} >Consultations</button>
            <button onClick={ () => setCurrentFilter('X-ray','Radiology')} >Scans</button>
            <div>
                {currentRecord.map((record) => (
                    <ServiceDetails 
                        record={record}
                        key={record.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceTotals