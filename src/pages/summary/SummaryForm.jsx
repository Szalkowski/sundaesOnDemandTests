import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId={'terms-and-conditions'}>
        <Form.Check
          type={'checkbox'}
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
        <Button variant={'primary'} type={'submit'} disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form.Group>
    </Form>
  );
};
