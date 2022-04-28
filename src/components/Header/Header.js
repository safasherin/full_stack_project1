import React from 'react'
import header from '../../images/header.jpg';
import './Header.css'
export default function
    img() {
    return (
        <div className='header'>
            <div className="headerwrapper">
                {/* <img className='headerimage' src={header} alt="img" /> */}
                <div className="headerlines">
                    {/* <p className="headerline1">
                        Super Soft, Stylish Bed Linen
                    </p>
                    <p className="headerline1">
                        Made With Love
                    </p>
                     */}
                    <p className="headerline">
                        Super Soft, Stylish Bed Linen
                        <br />
                        Made With Love

                    </p>


                </div>
            </div>
            <div className="headerline2">
                EXPLORE
            </div>
            <div className="verticalline">
            </div>
        </div>
    )
}
