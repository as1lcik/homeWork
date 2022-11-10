import React, { useState } from "react";

export default function UseStateLesson() {

    let [developer, setDeveloper ]= useState('IOS')
    let [color, setColor] = useState('has-background-warning')
    let [count , setCount] = useState (0)
    function web(){
        setDeveloper('Web')
    }
    function android(){
        setDeveloper('Android')
    }
    function ios(){
        setDeveloper('IOS')
    }


    function web(){
        setDeveloper("Web")
        setColor('has-background-danger')
    }
    function android(){
        setDeveloper('Android')
        setColor('has-background-primary')
    }
    function ios(){
        setDeveloper('IOS')
        setColor('has-background-warning')
    }


    function decresse(){
        setCount(count - 1)
    }

    function incresse(){
        setCount(count + 1)
    }

    return (
        <>
            
            <div className="columns is-centered ">
                <div className="column is-6 has-text-centered   ">
                    <div className={`box ${color}`}>
                    <h1 className="title">{developer}</h1>
                    <br />
                    <button
                     className={"button " + (developer === 'Web'? 'is-light' : '')}
                      onClick={web} >Web</button>
                    <button
                    className={"button mx-2 " + (developer === 'Android'? 'is-light' : '')}
                    onClick={android} >Android</button>
                    <button 
                    className={"button " + (developer === 'IOS'? 'is-light' : '')}
                    onClick={ios} >IOS</button>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="box has-text-centered ">
                        <button className="button" onClick={decresse}>-</button>
                        <strong className="is-size-4 mx-3">{count}</strong>
                        <button className="button" onClick={incresse} >+</button>
                    </div>
                </div>
            </div>

        </>
    )
}   