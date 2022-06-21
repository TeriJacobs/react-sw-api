import React, { Fragment} from 'react';
import { Card, Container } from 'react-bootstrap';


const Home = () => {
return (<Fragment>
        <Container className="index_body mt-5 background">
        <Card className="pb-5">
            <Card.Title className="pt-5">Star Wars API</Card.Title>
                <Card.Body>
                    <Card.Text>
                    This web app displays the Star Wars characters and the 5 traits of each character - these include the property values of name, height, mass, and homeworld. On this app, homeworld is labeled as planets -  where it containerizes the residents/people belonging to the selected planet.
                    </Card.Text>
                    <Card.Text>
                       The data in this project was accessed via the <a href="https://swapi.dev/">swapi</a>. While the goal was to use Apollo and GraphQL to wrap the Starwars API, it was a challenge to locate an exiting graphQL API that could easily be implemented into the 48hour assessment. Instead, I opted for the Axios routing in order to access the data for the project visibility.
                    </Card.Text>
                </Card.Body>
                </Card>
        </Container>
    </Fragment>)
}

export default Home