import React from 'react'

import Bill from './Bill'

const ServiceDetails = (props) => {
    const { records } = props

    return (
        <div>
            <h1> services </h1>
            {records.map((record) => (
                <Bill 
                    record={record}
                />
            ))}
        </div>

    )
}

export default ServiceDetails