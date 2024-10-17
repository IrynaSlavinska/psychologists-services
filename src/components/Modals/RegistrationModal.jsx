import { Modal } from './ModalWrapper';
import {
  ModalTitle,
  ModalText,
  Form,
  Label,
  Input,
  SubmitButton,
} from './ModalWrapper.styled';
import { Password } from './InputPassword';

export const RegistrationModal = ({ isOpen, onClose }) => {
  const SubmitClick = e => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Registration</ModalTitle>
      <ModalText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </ModalText>
      <Form>
        <Label>
          <Input type="text" name="name" placeholder="Name" autoFocus />
        </Label>
        <Label>
          <Input type="email" name="email" placeholder="Email" />
        </Label>
        <Password />
        <SubmitButton type="submit" onClick={SubmitClick}>
          Sign Up
        </SubmitButton>
      </Form>
    </Modal>
  );
};
