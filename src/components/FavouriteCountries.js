import React from 'react';

const favouriteCountries = ({countries}) => {

    const elements = countries.map((country) => {
        return(
            <li>{country.name.official}</li>
        )
    })


        return(
            <>
            <p>FavouriteCountries:</p>
            <ul>
                {elements}
            </ul>
            </>
        )

}

export default favouriteCountries;