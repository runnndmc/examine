import React from 'react'

const Totals = (props) => {
    const { bill } = props;
    console.log(bill)

    return (
        <div>
            {bill.fields.service}
            <h1>this is your total</h1>
        </div>
    )
}

export default Totals