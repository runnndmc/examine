import React from 'react'

const Totals = (props) => {
    const { bill } = props;
    console.log(bill.totalRounded)

    const billArray = []

  
    const billTotal =  [Math.round(bill.fields.stillowe * 100) / 100].push(billArray)
    console.log(billTotal)
    console.log(billArray)

    


    /* 

    const total = billTotal.reduce((sum, bill) => {
        return sum + bill.fields.stillowe;
    }, 0) 

    const allBills = Math.floor(total / bill.length)*/

    return (
        <div>
            {bill.fields.service}
            <h1>this is your total</h1>
            <h2>here: {billTotal}</h2>
            <h2>Average: </h2>
        </div>
    )
}

export default Totals