import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import card from '../../images/card.png';
import applepay from '../../images/applepay.png';
import visa from '../../images/visa.png';
import mp from '../../images/mp.png';
import paypal from '../../images/paypal.png'
import './Footer.css'
export default function Footer() {
    return (
        <div className='mainfooter'>
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h5 className="footerTitlesStyle">
                            OUR STORY
                        </h5>
                        <p >
                            Lorem ipsum dolor sit amet consectetur <br />
                            adipisicing elit, sed do eiusernud tempor  <br />
                            incididunt ut labore et dolor magna aliqua.
                        </p>
                        <ul className='listItemsFooter'>
                            <li className='listItemFooter'>
                                <FaFacebookF />
                            </li>
                            <li className='listItemFooter'>
                                <AiOutlineTwitter />
                            </li>
                            <li className='listItemFooter'>
                                <AiOutlineInstagram />
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="footerTitlesStyle">
                            MORE...
                        </h5>
                        <ul>
                            <li className='footerListStyle'>
                                About Us
                            </li>
                            <li className='footerListStyle'>
                                Contact Us
                            </li>
                            <li className='footerListStyle'>
                                Track My Order
                            </li>
                            <li className='footerListStyle'>
                                FAQ
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5 className="footerTitlesStyle">
                            SHOP
                        </h5>
                        <ul>
                            <li className='footerListStyle'>
                                Bed Linen
                            </li>
                            <li className='footerListStyle'>
                                Bath Towels
                            </li>
                            <li className='footerListStyle'>
                                Bathrobes
                            </li>
                            <li className='footerListStyle'>
                                Home Frangrances
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="footerTitlesStyle">
                            NEWSLETTER
                        </h5>
                        <p>
                            Subscribe to receive updates, access to

                            <br />
                            exclusive deals, and more
                        </p>
                        <form className='formdiv'>
                            <input className='inputStyle' type="text" placeholder='Enter your email address' />
                            <button className='btnStyle'>SUBSCRIBE</button>
                        </form>

                    </div>

                </div>


                <div className="row">
                    <div className="col2">
                        <div className="col2Sub">
                            <p className='copyStyle'>
                                &copy;2020 BLAUCHE
                            </p>
                        </div>
                        <div className="col2Sub">
                            <img className="fImg" src={mp} alt="img" />
                            <img className="fImg" src={applepay} alt="img" />
                            <img className="fImg" src={card} alt="img" />
                            <img className="fImg" src={paypal} alt="img" />
                            <img className="fImg" src={visa} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
