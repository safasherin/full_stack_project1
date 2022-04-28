import React, { useEffect, useState } from 'react';
import b1 from '../../images/b1.png';
import b2 from '../../images/b2.png';
import b3 from '../../images/b3.png';
import b4 from '../../images/b4.png';
import { AiOutlineInstagram } from "react-icons/ai";
import axios from 'axios';
import './Instafeed.css';
import Carousel from 'react-elastic-carousel';
export default function Instafeed() {
    const [instaImages, setInstaImages] = useState([
        // { img: b1 },
        // { img: b2 },
        // { img: b3 },
        // { img: b4 }
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
            // var data = await resp.json()
            // console.log(resp)
            var data = await resp.data.map((item) => item.acf)
            console.log(data)
            setInstaImages(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        <div className='iContainer'>
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
