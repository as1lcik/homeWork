import React, { useState, useEffect } from "react";

export default function UseEfecetLesson() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('has-text-info')
    const [disabled, setDisabled] = useState(true)

    useEffect( () =>{
        if(count > 0){
            setColor('has-text-primary')
            setDisabled(false)
        }else if(count < 0){
            setColor('has-text-danger')
            setDisabled(false) 
        }else{
            setColor('has-text-info')
            setDisabled(true)
        }
        document.title = count
    },[count])


    return (
        <>
            <section className="section" >
                <div className="columns is-centered">
                    <div className="column is-6">
                        <div className="box">
                            <div className="has-text-centered">
                                <h1 className={`title ${color}`}>{count}</h1>
                                <button className="button is-danger"
                                    onClick={() => setCount(count - 1)}
                                >-</button>
                                <button className="button is-info mx-4"
                                    onClick={() => setCount(0)} disabled={disabled}
                                >0</button>
                                <button className="button is-primary"
                                    onClick={() => setCount(count + 1)}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}   