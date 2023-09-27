import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const SinglePage = () => {
    let params = useParams().id
    let navigate = useNavigate()
    console.log(params)

    let url = "https://65018bd2736d26322f5bdf52.mockapi.io/sport/"

    const [data, setData] = useState()

    const getData = () =>{
        axios.get(url+params).then((res)=>{
            console.log(res)
            setData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteData = (id) =>{
        axios.delete(url+id).then((res)=>{
            console.log(res)
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
        })
    }

    return (
        <div>
            <Link to={"/"}>Ortga</Link>
            <div className="card">
                <img src={data?.img} alt=""  width={200}/>
                <h2>{data?.title}</h2>
                <h3>{data?.text}</h3>
                <button onClick={()=>deleteData(data?.id)}>Delete</button>
            </div>
        </div>
    )
}

export default SinglePage
