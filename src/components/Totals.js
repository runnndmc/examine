import React from 'react'

const Totals = (props) => {
    const { bills } = props;

    const billTotal = bills.reduce((sum, bill) => {
        return sum + bill.fields.stillowe;
    }, 0).toFixed(2)
    
    const allBills = (billTotal / bills.length).toFixed(2)

    return (
        <div>
            <h1>this is your total</h1>
            <h2>here: {billTotal}</h2>
            <h2>Average: {allBills}</h2>
        </div>
    )
}

export default Totals