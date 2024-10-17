import { useEffect } from 'react';
import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  CloseIcon,
} from './ModalWrapper.styled';
import icons from 'assets/icons/psy-icons.svg';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseIcon width="32" height="32">
            <use href={`${icons}#icon-close`}></use>
          </CloseIcon>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};
