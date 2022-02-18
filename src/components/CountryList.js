import React from 'react';
import Country from './Country'

const CountryList = ({countries, handleSelectedCountry, handleSelectedFavourite}) => {

    const alphabetically = countries.sort(function(a, b){
        let textA = a.name.official.toUpperCase();
        let textB = b.name.official.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

    const countryItems = alphabetically.map((country, index) => {
        return <Country country={country} index={index} key={index} handleSelectedCountry = {handleSelectedCountry}/>
    })


    return(
        <>
        <p>{countryItems}</p>
        </>
    )
}

export default CountryList