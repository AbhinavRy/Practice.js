import React from 'react'

export default function ProdInfo(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.imgURL} alt="avatar_img" />
            <h2>{props.price}</h2>
            <p>{props.rating}</p>
            <p>{props.desc}</p>
        </div>
    )
}