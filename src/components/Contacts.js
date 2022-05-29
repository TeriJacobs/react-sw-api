import React, { Fragment, useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';


const Contacts = () => {

useEffect(() => {
    getContacts();
}, [])

    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState([false])

    //make api call
    const getContacts = async () => {
        try{
            //fetch data from api
            const res = await axios.get('https://randomuser.me/api/?results=12')
            //set contacts
            setContacts(res.data.results)
            setLoading(true)
        } catch (err) {
            alert(err.message);
        }
    }

    return <Fragment>
        <Row>
            {loading && contacts.map((contact) => (
            <Col sm={12} md={6} lg={4} key={contact.login.uuid}>
                {contact.name.first}
            </Col>
            ))}
        </Row>
    </Fragment>
}

export default Contacts