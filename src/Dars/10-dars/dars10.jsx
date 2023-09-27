import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dars10 = () => {

    let url = "https://fakestoreapi.com/products"
    const [data, setData] = useState()
    const getData = () =>{
        axios.get(url).then((res)=>{
            // console.log(res.data)
            setData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <React.Fragment>
            <div className="grid">
                {data?.map((item)=>{
                    return(
                        <div className='card' key={item.id}>
                            {item.title}
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Dars10
