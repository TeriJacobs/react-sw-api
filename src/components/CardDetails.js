import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData]= useState([]);
    let {name, height, mass, birth_year, homeworld, gender, films} = fetchedData;
    let api = `https://swapi.dev/api/people/${id}`
    useEffect(() => {
        (async function(){
          let data = await fetch(api).then(res =>res.json());
          updateFetchedData(data)
        })()
      }, [api])

    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">{name}</h1>
                <div className="content col-10">
                    <div className="">
                        <span className="fw-bold">Height: {height}</span>
                    </div>
                    <div className="">
                    <span className="fw-bold">Mass: {mass}</span>
                    </div>
                    <div className="">
                    <span className="fw-bold">Birth Year: {birth_year}</span>
                    </div>
                    <div className="">
                    <span className="fw-bold">Gender: {gender}</span>
                    </div>
                    <div className="">
                    <span className="fw-bold">Planet: {homeworld}</span>
                    </div>
                    {/* <div className="">
                    <span className="fw-bold">Films: {films}</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CardDetails