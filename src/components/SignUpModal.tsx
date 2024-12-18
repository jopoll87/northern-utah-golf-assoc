import React from 'react';
import { Modal, ModalHeader, Button, ModalContent, Form, FormField } from 'semantic-ui-react';

const SignUpModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      trigger={<Button>Join Now</Button>}
    >
      <ModalHeader>Sign Up For Norther Utah Golf Association</ModalHeader>
      <ModalContent>
        <Form>
          <FormField>
            <label>First Name</label>
            <input placeholder='First Name'/>
          </FormField>
          <FormField>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </FormField>
          <FormField>
            <label>Email Address</label>
            <input placeholder='Email Address' />
          </FormField>
          <FormField>
            <label>Phone Number</label>
            <input placeholder='Phone Number' />
          </FormField>
          <Button type='submit' onClick={() => setIsOpen(false)}>Sign Up</Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
