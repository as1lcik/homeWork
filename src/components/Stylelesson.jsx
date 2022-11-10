import React from "react";

export default function Stylelesson() {

    const myStyless = {
        color: 'red',
        border: '1px solid black',
        padding: '10px',
        margin: "20px 0px",
        borderRadius: '10px'
    }

    return ( 
        <div>
            <h1 style={{color: 'red', background: 'lightblue', padding: '10px', borderRadius: '10px'}}>Hello world</h1>
            <h1 style={myStyless}>Hello Monday</h1>
            <h1 className="hello">Hello Uzbekistan</h1>

            <h1 className="title is-danger">Title</h1>
        </div>
    )
}