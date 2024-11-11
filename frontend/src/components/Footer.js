import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-1 p-4 text-center">
      <Container>
        <Row>
          <Col md="4">
            <h5>Liên Hệ</h5>
            <p>Địa chỉ: Quán Hải Na, QL1A, Hải Phú, Bố Trạch, Quảng Bình</p>
            <p>Số điện thoại: 0836628464</p>
            <p>Email: info@beautybooking.com</p>
          </Col>
          <Col md="4">
            <h5>Liên Kết</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
              <li><a href="https://zalo.me" className="text-white">Zalo</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Giờ Mở Cửa</h5>
            <p>Thứ 2 - Thứ 6: 9:00 - 18:00</p>
            <p>Thứ 7: 10:00 - 17:00</p>
            <p>Chủ Nhật: Nghỉ</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <p>© 2024 Beauty Booking. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
