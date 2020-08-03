import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <Link to='/' className='name'>exaMine</Link>
        </nav>
    )
}

export default Header