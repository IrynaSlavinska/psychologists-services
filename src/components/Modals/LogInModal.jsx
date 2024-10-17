import { Modal } from './ModalWrapper';
import {
  ModalTitle,
  ModalText,
  Form,
  Label,
  Input,
  SubmitButton,
} from './ModalWrapper.styled';

export const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Log In</ModalTitle>
      <ModalText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </ModalText>
      <Form>
        <Label>
          <Input type="email" name="email" placeholder="Email" autoFocus />
        </Label>
        <Label>
          <Input type="password" name="password" placeholder="Password" />
        </Label>
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </Modal>
  );
};
