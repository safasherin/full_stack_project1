import React, { useState } from 'react'
import title from '../../images/title.png';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const handleSubmit = () => {
        // console.log(open)
        setOpen(!open)
    }
    return (

        <nav >
            {
                open ? (
                    <div className="smallScreenView">
                        <AiOutlineCloseCircle size={40} className="closeStyle" onClick={handleSubmit} />
                        <ul className='ssvListsStyle'>
                            <li className='ssvListStyle'>SHOP</li>
                            <li className='ssvListStyle'>OUR STORY</li>
                            <li className='ssvListStyle'>EXPERTISE</li>
                            <li className='ssvListStyle'>CONTACT</li>
                            <li className='ssvListStyle'>PROFILE</li>
                            <li className='ssvListStyle'>MY CART</li>

                        </ul>
                    </div>
                ) :
                    <div className="Navbar">
                        <ul className='left'>
                            <li className='leftlist'>
                                SHOP
                            </li>
                            <li className='leftlist'>
                                OUR STORY
                            </li>
                            <li className='leftlist'>
                                EXPERTISE
                            </li>
                        </ul>
                        <ul className="center">
                            <li >
                                <img className='centerlist' src={title} alt="img" />
                            </li>
                        </ul>
                        <ul className="right">
                            <li className='rightlist'>
                                CONTACT
                            </li>
                            <li className='rightlistSub'>
                                <li >
                                    <AiOutlineSearch size={30} color="#666262" />
                                </li>
                                <li className=''>
                                    <BsPerson size={30} color="grey" />
                                </li>
                                <li className=''>
                                    <AiOutlineShoppingCart size={30} color="grey" />
                                </li>

                            </li>
                        </ul>
                        <GiHamburgerMenu size={32} color={"#999191"} className="hamburgerStyle" onClick={handleSubmit} />

                    </div>
            }
        </nav>
    )
}
