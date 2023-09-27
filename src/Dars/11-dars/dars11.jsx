import { Box, Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dars11 = () => {
    const [load, setLoad] = useState(true)
    let url = "https://65018bd2736d26322f5bdf52.mockapi.io/sport"
    const [data, setData] = useState()
    const getData = () =>{
        setLoad(true)
        axios.get(url).then((res)=>{
            console.log(res, "GET")
            setData(res.data)
            setTimeout(() => {
                setLoad(false)
            }, 2500);
            
        })
    }
    useEffect(()=>{
        getData()
    },[])
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [text, setText] = useState("")

    const postData = () =>{
        const info = {
            title:title,
            img:img,
            text:text,
        }
        axios.post(url, info).then((res)=>{
            console.log(res, "POST")
            if (res.status === 201) {
                getData()
            }
        })
    }
    const [id, setId] = useState("")
    const putData = () =>{
        const info = {
            title:title,
            img:img,
            text:text,
        }
        axios.put(url+"/"+id, info).then((res)=>{
            console.log(res, "PUT")
            if (res.status === 200) {
                getData()
            }
        })
    }
    let array = [1,2,3,4,5,6]
    return (
        <div>
            {/* {load ? <div className=''></div> : ""  } */}
            
            <div>
                <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/> <br />
                <input type="text" placeholder='img' onChange={(e)=>setImg(e.target.value)}/> <br />
                <input type="text" placeholder='text' onChange={(e)=>setText(e.target.value)}/> <br />
                <button onClick={postData}>POST</button>
            </div>
            <hr />
            <div>
                <input type="text" placeholder='id' onChange={(e)=>setId(e.target.value)}/>
                <button onClick={putData}>PUT</button>
            </div>
            <hr />
            <div className='grid'>
                {
                    load ?
                    array.map(()=>{
                        return(
                            <div className=''>
                                <Skeleton variant="rectangular" width={"100%"} height={118} />
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>
                            </div>
                        )
                    })
                    :
                    data?.map((item)=>{
                        return(
                            <div className='card' key={item.id}>
                                <img src={item.img} width={100} alt="" />
                                <Link to={"/news/"+item.id}>{item.title}</Link>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Dars11
