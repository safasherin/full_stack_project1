import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

export default function ProductList() {

    const [productlist, setProductlist] = useState(
        []
    )
    useEffect(() => {
        async function fetchData() {
            await getCategories()
        }
        fetchData();
    }, [])
    const getCategories = async () => {
        try {
            var resp = await axios.get(process.env.REACT_APP_ENDPOINT + "categories")

            // console.log(resp)
            var data = await resp.data.map((item) => item.acf)
            // console.log(data)
            setProductlist(data)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="productLists">
            <p className="para">
                Our premium products got the finest quality cotton that create an exquisite lightweight textile
                <br />
                that's both soft and crisp - guarenteed to give you a wonderful night's sleep.
            </p>
            <div className="productListsdiv">
                {
                    productlist.map((item, indx) => (
                        <div className='divClass' key={indx}>
                            <img className='productListsImgs' src={item.image} alt="img" />
                            <p className='labelStyle'>{item.name}</p>
                        </div>

                    )
                    )
                }
            </div>
        </div>
    )
}
