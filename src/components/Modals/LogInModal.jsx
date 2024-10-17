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

export const LoginModal = ({ isOpen, onClose }) => {
  const SubmitClick = e => {
    onClose();
  };

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
        <Password />
        <SubmitButton type="submit" onClick={SubmitClick}>
          Log In
        </SubmitButton>
      </Form>
    </Modal>
  );
};
