import React from 'react'

const Totals = (props) => {
    const { bills } = props;

    const billTotal = bills.reduce((sum, bill) => {
        return sum + bill.fields.stillowe;
    }, 0).toFixed(2)
    
    const allBills = (billTotal / bills.length).toFixed(2)

    return (
        <div className="bill-table-footer">
            <div className='table-footer-cell'>this is your total</div>
            <div className='table-footer-cell'>BILLtotal: {billTotal}</div>
            <div className='table-footer-cell'>ALL BILLS: {allBills}</div>
        </div>
    )
}

export default Totals