import React from 'react';
import { Modal, ModalHeader, Button, ModalContent, Form, Input, FormGroup, FormInput } from 'semantic-ui-react';

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
          <FormGroup>
            <FormInput 
              id='form-input-control-first-name' 
              control={Input} 
              label='First Name'
              placeholder='First Name' 
              required 
              width={8}
            />
            <FormInput 
              id='form-input-control-last-name'
              control={Input}
              label='Last Name' 
              placeholder='Last Name' 
              required 
              width={8}
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              id='form-input-control-error-email' 
              control={Input}
              label='Email Address' 
              placeholder='johndoe@email.com' 
              required 
              width={8}
              type='email'
            />
            <FormInput
              id='form-input-control-error-phone-number'
              control={Input}
              label='Phone Number' 
              placeholder='555-123-4567' 
              required 
              width={8}
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
          </FormGroup>
          <Button type='submit'>Sign Up</Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
