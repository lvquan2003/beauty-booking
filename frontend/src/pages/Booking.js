import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Booking = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    service: '',
    appointmentDate: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <h1 className="my-4">Đặt Lịch</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="customerName">
          <Form.Label>Họ và Tên</Form.Label>
          <Form.Control
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Số Điện Thoại</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="service">
          <Form.Label>Dịch Vụ Chọn</Form.Label>
          <Form.Control
            as="select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Chọn dịch vụ</option>
            <option value="Mi Classic">Mi Classic</option>
            <option value="Mi Volume">Mi Volume</option>
            <option value="Mi Hybrid">Mi Hybrid</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="appointmentDate">
          <Form.Label>Ngày và Giờ</Form.Label>
          <Form.Control
            type="datetime-local"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="notes">
          <Form.Label>Ghi Chú</Form.Label>
          <Form.Control
            as="textarea"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đặt Lịch
        </Button>
      </Form>
    </Container>
  );
};

export default Booking;
