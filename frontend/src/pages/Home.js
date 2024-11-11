import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Home.css";


function Home() {
  return (
      <div>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.09b88cd337676337a19ac634d6ab7ce0?rik=WQIKCNW0HtuBGQ&pid=ImgRaw&r=0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Nối mi xinh</h3>
            <Link to="/eyelash">
              <Button variant="primary">Khám phá</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.09b88cd337676337a19ac634d6ab7ce0?rik=WQIKCNW0HtuBGQ&pid=ImgRaw&r=0"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Làm Nails chuyên nghiệp</h3>
            <Link to="/nail">
              <Button variant="primary">Khám phá</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.09b88cd337676337a19ac634d6ab7ce0?rik=WQIKCNW0HtuBGQ&pid=ImgRaw&r=0"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Đặt lịch ngay</h3>
            <Link to="/booking">
              <Button variant="primary">Đặt lịch</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <h2>Nối Mi</h2>
            <p>Chúng tôi cung cấp dịch vụ nối mi chuyên nghiệp, giúp bạn có đôi mắt quyến rũ và tự tin hơn.</p>
            <Link to="/services/eyelash">
              <Button variant="secondary">Tìm hiểu thêm</Button>
            </Link>
          </Col>
          <Col md={4}>
            <h2>Làm Nails</h2>
            <p>Dịch vụ làm nails của chúng tôi mang đến cho bạn những bộ móng đẹp và thời trang nhất.</p>
            <Link to="/services/nail">
              <Button variant="secondary">Tìm hiểu thêm</Button>
            </Link>
          </Col>
          <Col md={4}>
            <h2>Đặt Lịch</h2>
            <p>Đặt lịch ngay để trải nghiệm các dịch vụ làm đẹp tuyệt vời của chúng tôi.</p>
            <Link to="/booking">
              <Button variant="secondary">Đặt lịch ngay</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Home;