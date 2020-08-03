import React from 'react'


const Bill = (props) => {
    const { fields } = props.record

    return(
        <h2>{fields.notes}</h2>

    )
}
export default Bill