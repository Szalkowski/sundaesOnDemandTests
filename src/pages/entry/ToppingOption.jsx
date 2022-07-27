import { Col, Form, Row } from 'react-bootstrap';

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleCheckboxChange = (event) => {
    updateItemCount(name, event.target.checked ? 1 : 0);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '80%' }}
        src={`http://localhost:3000${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group
        as={Row}
        controlId={`${name}-topping`}
        style={{ marginTop: 10 }}
      >
        <Form.Check
          type={'checkbox'}
          label={name}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
    </Col>
  );
}
