import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'


const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    return (
        <div>
            <h2>All Bottles: {bottles.length}</h2>

            <div className='card_container'>
                {
                   bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;