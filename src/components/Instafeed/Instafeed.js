import React, { useEffect, useState } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import axios from 'axios';
import './Instafeed.css';
import Carousel from 'react-elastic-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()
export default function Instafeed() {
    const [instaImages, setInstaImages] = useState([
    ])

    useEffect(() => {
        async function fetchData() {
            await getIg()
        }
        fetchData();
    }, [])
    const getIg = async () => {
        try {
            var resp = await axios.get(process.env.REACT_APP_ENDPOINT + "igposts")
            // console.log(resp)
            var data = await resp.data.map((item) => item.acf)
            await data.reverse()
            setInstaImages(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        <div className='iContainer' data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
            <div className="iTitle">
                <div>FOLLOW US ON   </div>
                <div className="instaIconStyle"><AiOutlineInstagram size={25} /></div>
            </div>

            <div >
                <Carousel itemsToShow={4} className="iRow">
                    {
                        instaImages.map((item, indx) => (
                            <img key={indx} className="iImg" src={item.image} alt="img" />
                        ))
                    }

                </Carousel>
            </div>

        </div>
    )
}
