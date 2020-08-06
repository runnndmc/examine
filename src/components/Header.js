import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <Link to='/' className='name'>exaMine</Link>
            <Link to='/add' className='add'>Add New Bill</Link>
        </nav>
    )
}

export default Header