import React from 'react';
import Country from './Country';

const CountryDetail = ({selectedCountry, handleSelectedFavourite}) => {

    return(
        <>
        <p>Name: {selectedCountry.name.official}</p>

        <img src={selectedCountry.flags.png}/>

        <button onClick =  {() => {handleSelectedFavourite(selectedCountry)}}>add to favourite</button>

        </>
    )
}

export default CountryDetail;