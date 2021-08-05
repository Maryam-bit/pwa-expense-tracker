import React from 'react'
import logo from '../../assets/logo.png'
import './header.styles.scss'
const Header = () => {
    return (
        <div className='header container-fluid'>
        <div className="row">
            <img src={logo} alt="logo" />
            <div className="m">
                <p>Expense Tracker</p>
            </div>
        </div>
    </div>
    )
}
export default Header