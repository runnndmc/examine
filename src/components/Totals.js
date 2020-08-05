import React from 'react'

const Totals = (props) => {
    const { bill } = props;
    console.log(bill)

    const billsTotal = bill.fields.stillowe

    return (
        <div>
            {bill.fields.service}
            <h1>this is your total</h1>
            <h2>here: {billsTotal}</h2>
        </div>
    )
}

export default Totals