import React, { Fragment, useEffect, useState} from 'react';
import { Row, Col, Card, Button, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import Pagination from './Pagination';


const People = () => {

    const [pageNumber, setPageNumber] = useState(1);
    let api = `https://swapi.dev/api/people/?page=${pageNumber}`;
    const [People, setPeople] = useState([])
    // const [Planet, setPlanet] = useState([])
    const [loading, setLoading] = useState([false])

useEffect(() => {
    getPeople();
    setLoading(false)
}, [api])

    //make api call
    const getPeople = async () => {
        try{
            //fetch data from api
            const res = await axios.get(api)
            //const pl = await axios.get('https://swapi.dev/api/planets/')
            //set People
            setPeople(res.data.results)
            // setPlanet(pl.data.results)
            setLoading(true)
            // console.log(res.data.results)
            People.map((item)=>{console.log(item.name + `--- people`)})
            //Planet.map((x) => {console.log(x.name + `---planet`)});
           // Planet.map((y) => {console.log(y.residents)});
            // console.log(pl.data.results)
        } catch (err) {
            alert(err.message);
        }
    }

    return <Fragment>
        <Container className="index_body mt-5">
        <Row className="justify-content-md-center">
            {loading && People.map((results) => (
            <Col sm={12} md={6} lg={3} key={results.name} className="mt-2 mb-2">
                <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{results.name}</Card.Title>
                    <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>height: {results.height}</ListGroup.Item>
                        <ListGroup.Item>mass: {results.mass}</ListGroup.Item>
                        <ListGroup.Item>gender: {results.gender}</ListGroup.Item>
                        <ListGroup.Item>homeworld:{results.homeworld}</ListGroup.Item>
                    </ListGroup>                   
                    </Card.Text>
                    <Button variant="outline-dark">View HomeWorld</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        <Pagination  pageNumber={pageNumber} setPageNumber = {setPageNumber}/>
        </Container> 
    </Fragment>


    
}

export default People