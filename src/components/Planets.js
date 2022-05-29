import React, { Fragment, useEffect, useState} from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import axios from 'axios';

const Planets = () => {

    useEffect(() => {
        getPlanets();
    }, [])
    
        const [People, setPlanets] = useState([])
        const [loading, setLoading] = useState([false])

    //make an api call to get homeland
    const getPlanets = async () => {
        try{
            //fetch data from api
            const res = await axios.get('https://swapi.dev/api/planets')
            //set People
            setPlanets(res.data.results)
            setLoading(true)
        } catch (err) {
            alert(err.message);
        }
    }

    return <Fragment>
    <Container className="index_body mt-5">
    <Row className="justify-content-md-center">
        {loading && People.map((results) => (
        <Col sm={12} md={6} lg={3} key={results.name} className="mt-2 mb-2">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{results.name}</Card.Title>
                <Card.Text>
                {results.residents[`url`]}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        ))}
    </Row>
    </Container>
</Fragment>
}

export default Planets