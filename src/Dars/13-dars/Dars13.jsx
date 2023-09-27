import React, {useEffect, useState} from 'react'
import { data } from "./data"

const Dars13 = () => {
    // console.log(data)
    const [word, setWord] = useState("")
    const [search, setSearch] = useState(false)
    function handleCategory(params) {
        setWord(params)
    }
    useEffect(()=>{
        if (word !== "") {
            setSearch(true)
        }
    },[])
    return (
        <div>
            <div className="search">
                <input type="text" placeholder='Qidiruv...' onChange={(e)=>setWord(e.target.value)}/>
                <button onClick={()=>handleCategory("jewelery")}>jewelery</button>
                <button onClick={()=>handleCategory("electronics")}>electronics</button>
                <button onClick={()=>handleCategory("women's clothing")}>women's clothing</button>
                <button onClick={()=>handleCategory("men's clothing")}>men's clothing</button>
            </div>
            {data.map((item)=>{
                if (search === true) {
                    return(
                        <div key={item.id}>
                            <img src={item.image} width={100} alt="" />
                            <h4>title {item.title}</h4>
                            <h4>description {item.description}</h4>
                            <h4>category {item.category}</h4>
                            <hr />
                        </div>
                    )
                } else if (item.title.toLowerCase().includes(word.toLowerCase())){
                    return(
                        <div key={item.id}>
                            <img src={item.image} width={100} alt="" />
                            <h4>title {item.title}</h4>
                            <h4>description {item.description}</h4>
                            <h4>category {item.category}</h4>
                            <hr />
                        </div>
                    )
                } else if (item.description.toLowerCase().includes(word.toLowerCase())){
                    return(
                        <div key={item.id}>
                            <img src={item.image} width={100} alt="" />
                            <h4>title {item.title}</h4>
                            <h4>description {item.description}</h4>
                            <h4>category {item.category}</h4>
                            <hr />
                        </div>
                    )
                } else if (item.category.toLowerCase().includes(word.toLowerCase())){
                    return(
                        <div key={item.id}>
                            <img src={item.image} width={100} alt="" />
                            <h4>title {item.title}</h4>
                            <h4>description {item.description}</h4>
                            <h4>category {item.category}</h4>
                            <hr />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Dars13
