import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DetailsPage(){
    const [list, setList] = useState("");
    const [add, setAdd] = useState([]);
    function AddItem(){
        setList('')
       setAdd(old =>{
           return [...old, list]
       })
    }
    return(
        <div className="container-fluid w-50 mt-5">
            <div className="mb-3"><Link to='/'>Back to Home</Link></div>
            <span className="d-flex">
               <input type="text" className="form-control" name="list" value={list} onChange={(e)=>setList(e.target.value)} />
               <button className="btn btn-primary" onClick={AddItem}>Add</button>
           </span>
            <ul className="mt-5">
                {
                    add.map((item)=>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}