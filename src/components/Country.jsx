import { useState } from "react";

export default function (){


    let {ccn2}=useParams()

    const [country,setCountry]=useState

    useState=(()=>funzioneFetch(),[])

    const funzioneFetch=async()=>{
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${ccn2}`);
        const obj = await response.json();
        setCountry(obj)
        console.log(obj)
    }
    return (
        <>
         <div>
            <NavLink to={ccn2}>
                <h4>{country.common}</h4>
                <img src={country.flags.png} alt=""/>
            </NavLink>
        </div>
        </>
    )
}