import React from 'react';

const Country = ({country, index, handleSelectedCountry, }) => {

    const handleClick = () => {
        handleSelectedCountry(country)
    }
    
    return(
        <>
        <p onClick={handleClick}><h3>Name : <strong>{country.name.official}</strong></h3> <br/>Population: <strong>{country.population}</strong></p>

        </>

    )
}

export default Country