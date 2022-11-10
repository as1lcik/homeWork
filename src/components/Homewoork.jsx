import React, { useState } from "react";

export default function Homewoork() {


    let [cola, setCola] = useState('0.5 L')
    let [price, setPrice] = useState('5 000')
    let [count, setCount] = useState(0)
    let [color, setColor] = useState('has-text')

    function cola_5() {
        setCola('0.5 L')
        setPrice('5 000')
    }
    function cola_1() {
        setCola('1 L')
        setPrice('8 000')
    }
    function cola_2() {
        setCola('1.5 L')
        setPrice('12 000')
    }


    function decresse() {
        setCount(count - 1)
        setColor('has-text-danger')
    }

    function incresse() {
        setCount(count + 1)
        setColor('has-text-info')
    }

    return (
        <>
            <h1 className="title has-text-centered" >Homework</h1>
            <div className="columns is-centered ">
                <div className="column is-6 has-text-centered ">
                    <div className="box">
                        <h1 className="title" >Coca Cola</h1>
                        <p className="is-size-3">{price}</p>
                        <p className="is-size-4">{cola}</p>
                        <br />
                        <button className={"button " + (cola === '0.5 L' ? 'is-light' : '')}
                            onClick={cola_5} >0.5 L</button>
                        <button className={"button mx-2 " + (cola === '1 L' ? 'is-light' : '')}
                            onClick={cola_1}>1 L</button>
                        <button className={"button " + (cola === '1.5 L' ? 'is-light' : '')}
                            onClick={cola_2} >1.5 L</button>
                    </div>
                </div>

                <div className="column is-6">
                    <div className={`box has-text-centered ${color}`}>
                        <button className="button" onClick={decresse}>-</button>
                        <strong className="is-size-4 mx-3">{count}</strong>
                        <button className="button" onClick={incresse} >+</button>
                    </div>
                </div>
            </div>
        </>
    )
}