import React from "react";

export default function User({ name, surname, email, password, }) {  // prompt bilan ishlash 
    return (
        <div>
            <div className="box">
                <div className="has-text-centered">
                    <h1 className="title">{name}</h1>
                </div>
                <p className="subtitle">SurName: <strong>{surname}</strong> </p>
                <p className="subtitle">
                    Email: <strong>{email}</strong>
                </p>
                <p className="subtitle">
                    Password: <strong>{password}</strong>
                </p>
                <div className="has-text-centered">
                    <button className="button has-background-danger has-text-white">Add</button>
                </div>
            </div>
        </div>
    )
}

