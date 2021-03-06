import React, { useEffect, useState } from 'react'
import { GrStar } from "react-icons/gr";
import axios from 'axios';
import './Testimonials.css'
import Carousel from 'react-elastic-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()

export default function Testimonials() {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            await getTestimonials()
        }
        fetchData();
    }, [])
    const getTestimonials = async () => {
        try {
            var resp = await axios.get(process.env.REACT_APP_ENDPOINT + "testimonials")
            // console.log(resp)
            var data = await resp.data.map((item) => item.acf)
            await data.reverse()
            // console.log(data)
            setItems(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='testimonial' data-aos="fade-up" data-aos-delay="50"
            data-aos-duration="1000">
            <Carousel itemsToShow={1} >
                {
                    items.map((item, indx) => {
                        return (<div className="testiContainer" key={indx}>
                            <div className='testiReviews' >
                                {[...Array(parseInt(item.count)).keys()].map(() => < GrStar color='#b1b1b1' size={18} />)}
                            </div>
                            <p className='paraReviews' >{item.testimonial}
                            </p>

                        </div>)
                    })
                }</Carousel>
            <div className="moreReviewStyle">
                <p style={{ margin: "0", "fontSize": "0.8rem", color: "#a99c9c", "fontFamily": "Brownstdregular" }}>READ TESTIMONIALS</p>
                <hr className='hrStyle' />
            </div>
        </div>
    )
}
