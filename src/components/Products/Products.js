import React, { useEffect, useState } from 'react';
// import l1 from '../../images/l1.png'
// import l2 from '../../images/l2.png'
// import l3 from '../../images/l3.png'
import axios from 'axios';

import './Products.css';
import Carousel from 'react-elastic-carousel';
export default function Products() {
    const [offerProducts, setOfferProducts] = useState([]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 3 },
        // { width: 1750, itemsToShow: 3 },
    ]

    // {
    //     "image": l1,
    //     "productname": "Towel",
    //     "price": "AED XXX",
    //     "offersorAvailableoptions": "Special offfer:25% offer"
    // },
    // {
    //     "image": l2,
    //     "productname": "Bath Towel",
    //     "price": "AED XXX",
    //     "offersorAvailableoptions": "Available in 4 colors"
    // },
    // {
    //     "image": l3,
    //     "productname": "Bath Robe",
    //     "price": "AED XXX",
    //     "offersorAvailableoptions": "Special offfer:15% offer"
    // },


    useEffect(() => {
        async function fetchData() {
            await getProducts()
        }
        fetchData();
    }, [])
    const getProducts = async () => {
        try {
            var resp = await axios.get(process.env.REACT_APP_ENDPOINT + "products")
            // var data = await resp.json()
            // console.log(resp)
            var data = resp.data.map((item) => item.acf)
            // console.log(data)
            setOfferProducts(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="productsMaindiv">
            <p className="bSStyle">Best Sellers</p>

            {/* <Carousel responsive={responsive}> */}

            <div className='productsContainer'>
                <Carousel breakPoints={breakPoints} outerSpacing={0} className='productsContainer'>
                    {
                        offerProducts.map((item, indx) => (
                            <div className='prdStyle' key={indx}>
                                <img className="bimgStyle" src={item.image} alt="img" />
                                <p className="plabelStyle1">{item.name}</p>
                                <p className="plabelStyle2" >{item.cost}</p>
                                <p className="plabelStyle3">{item.description1} <span className="productdesc2">{item.description2}</span></p>

                            </div>
                        )
                        )
                    }
                </Carousel>
            </div>



        </div >
    )
}

