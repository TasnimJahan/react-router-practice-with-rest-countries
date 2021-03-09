import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    let {countryName}= useParams();
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        const API = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(API)
        .then(response => response.json())
        .then(data => setCountry(data))
    },[countryName])
    console.log(country);
    console.log(country[0]);
    console.log(country[0]?.capital);

    let countries = country[0];
    console.log(country[0]);
    // const {name,capital,alpha2Code,area,region,subregion,numericCode,population} = countries;
    // console.log(name);
    return (
        <div>
            <h2>Here are country details</h2>
            <h4>Name: {countryName}</h4>
            <p>Name: {countries?.name}</p>
            <p>Capital: {country[0]?.capital}</p>
            <p>alpha2Code: {country[0]?.alpha2Code}</p>
            <p>area: {country[0]?.area}</p>
            <p>region: {country[0]?.region}</p>
            <p>subregion: {country[0]?.subregion}</p>
            <p>numericCode: {country[0]?.numericCode}</p>
            <p>population: {country[0]?.population}</p>
        </div>
    );
};

export default CountryDetail;