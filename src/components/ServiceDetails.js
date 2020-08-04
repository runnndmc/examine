import React from 'react'
import Bill from './Bill'


const ServiceDetails = (props) => {
    const { record: bill } = props
    console.log(props)
    return (
        <div>
            <h2>{bill.fields.service}</h2>
                <Bill
                    bill={bill}
                    key={bill.id}
                />
        </div>

    )
}

export default ServiceDetails