import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import InputGroup from './Filters/Category/InputGroup';

const Planets = () => {

    let [id, setId] =useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);// this must match whats in app.js for cards/props match
    let {name, residents} = info;
    let api = `https://swapi.dev/api/planets/${id}`

    useEffect(() => {
        (async function (){
            let data = await fetch(api).then((res)=>res.json());
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((argX)=>{
                    return fetch(argX).then(res=>res.json())
                })
            );
            setResults(a);
        })()
    } 
    , [api]) //api to watch
    return <div className ="container">
        <div className="row my-3">
            <h2 className="text-center">Residents of : {name} </h2>
        </div>
        <div className="row">
            <div className="col-2">
                <h6 className="text-center mb-4">
                Select a planet to view residents
                </h6>
                <InputGroup setId={setId} name="Planet" total={60} />
            </div>
            <div className="col-9">
                <div className="row">
                    <Cards page='/planets/' results={results}/>
                    {()=>{
                        if(residents.length === []){
                            return (<div>There are no residents living.</div>)
                        }
                    }}
                </div>
            </div>
        </div>
    </div>

    
}

export default Planets