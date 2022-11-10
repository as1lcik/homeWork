import React from "react";

export default function Car({ model, color, price, km }) {
    
    return (
        <div>
            <div className="box">
                <div className="has-text-centered">
                    <h1 className="title">{model}</h1>
                </div>
                <p className="subtitle">Color: <strong>{color}</strong> </p>
                <p className="subtitle">
                    Price: <strong>{price}</strong>
                </p>
                <p className="subtitle">
                    Probeg: <strong>{km}</strong> km
                </p>
                <div className="has-text-centered">
                    <button className="button has-background-info has-text-white">Add</button>
                </div>
            </div>
            <div className="section">
                <div className="columns is-multiline">
                    {cars.map(car => (
                        <div className="column is-4">
                            <Car
                                model={car.model}
                                color={car.color}
                                price={car.price}
                                km={car.km}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const cars = [
    { model: 'Damas', color: 'red', price: '7000$', km: 0 },
    { model: 'Cobalt', color: 'choco', price: '10000$', km: 0 },
    { model: 'Gentra', color: 'blue', price: '12000$', km: 0 },
]

