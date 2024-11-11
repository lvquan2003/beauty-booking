import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const promotions = [
  {
    id: 1,
    title: 'Giảm 20% cho dịch vụ nối mi',
    description: 'Áp dụng cho tất cả các loại mi trong tháng này.',
    image: 'link_to_promotion_image_1'
  },
  {
    id: 2,
    title: 'Combo làm nails và nối mi',
    description: 'Giảm 30% khi sử dụng combo làm nails và nối mi.',
    image: 'link_to_promotion_image_2'
  }
];

const Promotions = () => {
  return (
    <Container>
      <h1 className="my-4">Khuyến Mãi</h1>
      <Row>
        {promotions.map(promo => (
          <Col key={promo.id} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={promo.image} />
              <Card.Body>
                <Card.Title>{promo.title}</Card.Title>
                <Card.Text>{promo.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Promotions;
