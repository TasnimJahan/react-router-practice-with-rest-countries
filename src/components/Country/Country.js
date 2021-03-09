import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const history = useHistory();
    const handleClick = (countryName)=>{
        const url = `/country/${countryName}`;
        history.push(url);
    }
    // console.log(props);
    const {name,capital}=props.country;
    const countryStyle={
        border:'1px solid purple',
        borderRadius:'10px',
        margin:'20px',
        padding:'10px'
    }
    return (
        <div style={countryStyle}>
            <h3>Country Name: {name}</h3>
            <h5>Capital Name: {capital}</h5>
            <button onClick={()=>{handleClick(name)}}>Click for Details of {name}</button>
            {/* <Link to={`/country/${name}`}><button>Click for Details of {name}</button></Link> */}
            {/* button ta link die dile beshi easy useHistory thekeo */}
        </div>
    );
};

export default Country;