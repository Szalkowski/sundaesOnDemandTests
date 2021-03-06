import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { useState } from 'react';

// const popover = (
//   <Popover id='popover-basic'>
//     <Popover.Header as='h3'>Popover right</Popover.Header>
//     <Popover.Body>
//       And here's some <strong>amazing</strong> content. It's very engaging.
//       right?
//     </Popover.Body>
//   </Popover>
// );
//
// const Example = () => (
//   <OverlayTrigger trigger='click' placement='right' overlay={popover}>
//     <Button variant='success'>Click me to see</Button>
//   </OverlayTrigger>
// );

export const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger trigger={'hover'} placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
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
