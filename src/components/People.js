import React, { Fragment, useEffect, useState} from 'react';
import { Row, Col, Card, Button, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';


const People = () => {

useEffect(() => {
    getPeople();
}, [])

    const [People, setPeople] = useState([])
    const [loading, setLoading] = useState([false])

    //make api call
    const getPeople = async () => {
        try{
            //fetch data from api
            const res = await axios.get('https://swapi.dev/api/people')
            //set People
            setPeople(res.data.results)
            setLoading(true)
            console.log(res.data.results.name)
            console.log(res.data.results.homeworld)
        } catch (err) {
            alert(err.message);
        }
    }
    //make an api call to get homeland
    // const getPlanets = async () => {
    //         try{
    //             //fetch data from api
    //             const res = await axios.get(`https://swapi.dev/api/planets/`)
    //             //set People
    //             setPlanets(res.data.results)
    //             setLoading(true)
    //         } catch (err) {
    //             alert(err.message);
    //         }
    // }

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
                        <ListGroup.Item>homeworld:{results.homeworld.url}</ListGroup.Item>
                    </ListGroup>                   
                    </Card.Text>
                    <Button variant="outline-dark">View HomeWorld</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
    </Fragment>

    
}

export default People