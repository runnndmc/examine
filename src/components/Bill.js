import React from 'react'


const Bill = (props) => {
    const { fields } = props.record

    return(
        <div>
            <h2>{fields.service}</h2>
            <h4>{fields.provider}</h4>
            <h4>{fields.duedate}</h4>
            <p>{fields.notes}</p>

        </div>

    )
}
export default Bill