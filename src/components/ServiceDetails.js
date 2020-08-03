import React from 'react'


const ServiceDetails = (props) => {
    const { fields } = props.record

    const totalRounded = Math.round(fields.totalowed*100)/100
    return (
        <div className='service-container'>
            <h4>{fields.provider}</h4>
            <h4>{fields.duedate}</h4>
            <h3>{totalRounded}</h3>
            <p>{fields.notes}</p>
        </div>

    )
}

export default ServiceDetails