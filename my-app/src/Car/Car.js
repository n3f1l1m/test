import React from 'react';
import './Car.sass';
export default (props) => (
    <div className = "Car">
        <h1>{props.name}</h1>
        <p>{props.year}</p>
    </div>
)