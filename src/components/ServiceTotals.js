import React, { useState } from 'react'
import ServiceDetails from './ServiceDetails'

const ServiceTotals = (props) => {
    console.log(props)
    const { records } = props
    const [currentRecords, updateCurrentRecords] = useState([])

    const setCurrentFilter = (currentFilter) => {
        let filteredRecords = records.filter((record)=> {
            return record.fields.service === currentFilter
        })
        console.log(filteredRecords)
        updateCurrentRecords(filteredRecords)  
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
                {currentRecords.map((record) => (
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