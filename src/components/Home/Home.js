import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country,setCountry] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    // console.log(country);
    return (
        <div>
            <h1>Country are</h1>
            {
                country.map(country=><Country country={country} alpha2Code={country.alpha2Code}></Country>)
            }
        </div>
    );
};

export default Home;