import React from 'react';
import quality from '../../images/Quality .png';
import warranty from '../../images/Warranty.png';
import stressfree from '../../images/StressFree.png';
import fair from '../../images/Fair.png';
import './Pros.css'
export default function Pros() {
    return (
        <div className='prosContainer'>

            <p className="protitleStyle">
                Your Comfort Is Our #1 Priority
            </p>
            <div className="containerPros">
                <div className="column">
                    <img className="prosImgStyle" src={quality} alt="img" />
                    <p className="headingStyle">Quality Products</p>
                    <p className="paragraphStyle">Lorem ipsum dolor sit amet,

                        <br />
                        consectetur adipisicing elit, sed ado</p>
                </div>
                <div className="column">
                    <img className="prosImgStyle" src={warranty} alt="img" />
                    <p className="headingStyle">Lifetime Warranty</p>
                    <p className="paragraphStyle">Lorem ipsum dolor sit amet,

                        <br />
                        consectetur adipisicing elit, sed ado</p>
                </div>
                <div className="column">
                    <img className="prosImgStyle" src={stressfree} alt="img" />
                    <p className="headingStyle">Stress-free Shopping</p>
                    <p className="paragraphStyle">Lorem ipsum dolor sit amet,

                        <br />
                        consectetur adipisicing elit, sed ado</p>
                </div>
                <div className="column">
                    <img className="prosImgStyle" src={fair} alt="img" />
                    <p className="headingStyle">Fair Prices</p>
                    <p className="paragraphStyle">Lorem ipsum dolor sit amet,

                        <br />
                        consectetur adipisicing elit, sed ado</p>
                </div>
            </div>
        </div>
    )
}
