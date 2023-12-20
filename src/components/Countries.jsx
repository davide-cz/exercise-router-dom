import { useEffect, useState } from "react"
import CountryCard from "./CountryCard";

export default function (){

    const [allCountries,setAllCountries]=useState([])


    const funzioneFetch=async()=>{
        const response = await fetch('https://restcountries.com/v3.1/all');
        const obj = await response.json();
        setAllCountries(obj)
        console.log(obj)

    }

    useEffect(()=>{funzioneFetch()},[])


    return (
        <>
            <div className="countriesPage">
                {allCountries.map((country, i)=>{
                    return (
                        <CountryCard 
                        className='countryCard'
                        key={`nation ${i}`}
                            nation={country}
                        />

                    )
                })}
            </div>
        </>
    )
}