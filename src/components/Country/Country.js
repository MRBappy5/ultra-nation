import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '50px'}
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country">
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population: {population}</p>
            <p><small>region: {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;