import React, { useState } from 'react'

import Bill from './Bill'

const ServiceDetails = (props) => {
    const { fields } = props.record
    const [currentRecord, updateCurrentRecord] = useState([])
   
    


    return (
        <div>
            <h1> services </h1>
            <h2>{fields.service}</h2>
            <h4>{fields.provider}</h4>
            <h4>{fields.duedate}</h4>
            <p>{fields.notes}</p>
        </div>

    )
}

export default ServiceDetails