import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import FavouriteCountries from '../components/FavouriteCountries';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedFavourites, setSelectedFavourites] = useState([])


        useEffect(() => {
            getCountries()
        }, [])

        const getCountries = function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(result => result.json())
        .then(countryData => setCountries(countryData))
        }

        const handleSelectedCountry = (country) => {
            setSelectedCountry(country)
        }

        const handleSelectedFavourite = (country) => {
            const favourites = [...selectedFavourites, country]
            setSelectedFavourites(favourites)
        }





    return(
        <>
        <CountryList countries = {countries} handleSelectedCountry = {handleSelectedCountry} />
        {selectedCountry? <CountryDetail selectedCountry = {selectedCountry} handleSelectedFavourite = {handleSelectedFavourite}/> : null}
        <FavouriteCountries countries={selectedFavourites}/>
        </>

    )

  


}

export default CountryContainer