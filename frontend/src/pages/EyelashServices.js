import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EyelashServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/eyeLashTypes');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching the services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Dịch Vụ Nối Mi</h1>
      <Row>
        {services.map(service => (
          <Col key={service._id} md={4} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>Giá: {service.price} VND</Card.Text>
                <Button as={Link} to={`/booking?service=${service._id}`} variant="primary">Đặt Lịch</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EyelashServices;
