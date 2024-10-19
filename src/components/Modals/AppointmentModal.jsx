import InputMask from 'react-input-mask';
import { Modal } from './ModalWrapper';
import {
  ModalTitle,
  ModalText,
  Form,
  Label,
  Input,
  SubmitButton,
  AppPsyContainer,
  AppAvatar,
  AppTextarea,
  FlexContainer,
} from './ModalWrapper.styled';
import { CustomDate } from './CustomDate/CustomDate';
import { CustomTime } from './CustomDate/CustomTime';

export const AppointmentModal = ({ isOpen, onClose, name, avatar }) => {
  const SubmitClick = e => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Make an appointment with a psychologists</ModalTitle>
      <ModalText>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </ModalText>

      <AppPsyContainer>
        <AppAvatar src={avatar} alt={name} />
        <div>
          <p>Your psychologists</p>
          <h3>{name}</h3>
        </div>
      </AppPsyContainer>

      <Form>
        <FlexContainer>
          <Label>
            <Input type="text" name="name" placeholder="Name" autoFocus />
          </Label>
          <Label>
            {/* <Input type="tel" name="tel" placeholder="+380" /> */}
            <InputMask
              mask="+380 (99) 999 99 99"
              placeholder="+380 (__) ___ __ __"
              alwaysShowMask={true}
              maskChar="_"
            >
              {inputProps => <Input {...inputProps} type="tel" id="phone" />}
            </InputMask>
          </Label>
        </FlexContainer>
        <FlexContainer>
          {/* <Label>
            <Input type="date" name="date" />
          </Label> */}
          <CustomDate />
          {/* <Label>
            <Input type="time" name="time" />
          </Label> */}
          <CustomTime type="time" />
        </FlexContainer>
        <Label>
          <Input type="email" name="email" placeholder="Email" />
        </Label>
        <Label>
          <AppTextarea name="comment" placeholder="Comment" />
        </Label>
        <SubmitButton type="submit" onClick={SubmitClick}>
          Send
        </SubmitButton>
      </Form>
    </Modal>
  );
};
