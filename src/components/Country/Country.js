import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const {name, population, area, region} = props.country;
    return (
        <div className='country'>
           <h3>Country name:{name}</h3>
           <p>population:{population}</p>
           <p>area:{area}</p>
           <p>Region:{region}</p> 
        </div>
    );
};

export default Country;