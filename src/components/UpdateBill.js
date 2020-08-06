import React, { useState } from 'react'

const UpdateBill = (props) => {
    const { fields } = props
    console.log(fields)

    return(
        <div>
            <h2>{props.service}</h2>
       </div>
    )
}

export default UpdateBill




