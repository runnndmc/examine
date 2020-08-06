import React from 'react'

const Totals = (props) => {
    const { bills } = props;

    const billTotal = bills.reduce((sum, bill) => {
        return sum + bill.fields.stillowe;
    }, 0).toFixed(2)
    
    const allBills = (billTotal / bills.length).toFixed(2)

    return (
        <div className="bill-table-footer">
            <div className='table-footer-cell'>Total Amount Owed</div>
            <div className='table-footer-cell'>{billTotal}</div>
        </div>
    )
}

export default Totals