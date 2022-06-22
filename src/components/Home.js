import React, { Fragment} from 'react';
import { Card, Container } from 'react-bootstrap';


const Home = () => {
return (<Fragment>
        <Container className="index_body mt-5 background">
        <Card className="pb-5">
            <Card.Title className="pt-5">Star Wars API</Card.Title>
                <Card.Body>
                    <Card.Text>
                    This web app displays the Star Wars characters and their selected traits, including the property values of name, height, mass, gender, and homeworld. Within this app, homeworld is labeled as planets -  where it containerizes the residents/people belonging to the selected planet
                    </Card.Text>
                    <Card.Text>
                       The data in this project was accessed via the <a href="https://swapi.dev/">swapi</a>API. And while the goal was (and remains a work in progress) to use Apollo and GraphQL to wrap the Starwars API, it turned out to be a much greater challenge than I anticipated. Instead, I focused on the interface which is encapsulated with React. Further learning, research, and knowledge will be built over the next few weeks to ensure I achieve the original goal.
                    </Card.Text>
                </Card.Body>
                </Card>
        </Container>
    </Fragment>)
}

export default Home