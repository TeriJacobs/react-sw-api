import React, { useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import Planets from './components/Planets'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Home from './components/Home';
import Pagination from './components/Pagination';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData]= useState([]);
  const {pages, results} = fetchedData;
  let api = `https://swapi.dev/api/people/?page=${pageNumber}`;

useEffect(() => {
  (async function(){
    let data = await fetch(api).then(res =>res.json());
    updateFetchedData(data)
  })()
}, [api])

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/planets" element={<Planets/>}></Route>
          <Route path="/planets/:id" element={<Planets/>}></Route>
        </Routes>
        <div className="container container-all mt-5">
          <div className="row">
            <div className='col-12 justify-content-center'>
              <div className='row'>
              <Routes>
                  <Route path="/people/" element={<Cards page="/people/"results={results}/>}></Route>
                  <Route path="/people/:id" element={<CardDetails page="/"results={results}/>}></Route>
              </Routes>
              <div className='row'>
              <Pagination pageNumber ={pageNumber} setPageNumber = {setPageNumber}/>
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div> 
    </BrowserRouter>

  );
}

export default App;
