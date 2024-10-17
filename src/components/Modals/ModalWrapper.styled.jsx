import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 69;
  width: 100vw;
  height: 100vh;
  background-color: var(--modalBackground);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  background-color: var(--white-color);
  color: black;
  width: 566px;
  border-radius: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CloseIcon = styled.svg`
  stroke: var(--text-color);
  transition: stroke var(--easedTransition);

  &:hover {
    stroke: var(--accent-color);
  }
`;

export const ModalTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  color: var(--light-text);
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--text-color);
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid var(--input-border);
  transition: border-color var(--easedTransition);

  ::placeholder {
    color: var(--text-color);
    font-size: 16px;
  }

  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;
  font-size: 18px;
  background-color: var(--accent-color);
  color: var(--white-color);
  border-radius: 30px;
  width: 100%;
  transition: background-color var(--easedTransition);
  margin-top: 40px;
  &:hover {
    background-color: var(--hover-color);
  }
`;
