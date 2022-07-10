import { Col } from 'react-bootstrap';

export default function ToopingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '80%' }}
        src={`http://localhost:3000${imagePath}`}
        alt={`${name} tooping`}
      />
    </Col>
  );
}
