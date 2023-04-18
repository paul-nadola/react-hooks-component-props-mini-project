import React from "react";

export default function About (props){
    const { image = "https://via.placeholder.com/215" , about } = props
    return(<aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>)
}
