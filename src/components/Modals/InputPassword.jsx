import { useState } from 'react';
import { PasswordLabel, PassInput, EyeButton } from './ModalWrapper.styled';
import icons from 'assets/icons/psy-icons.svg';

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = e => {
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  return (
    <PasswordLabel>
      <PassInput
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
      />
      <EyeButton onClick={togglePasswordVisibility} type="button">
        <svg>
          <use
            xlinkHref={`${icons}#${
              showPassword ? 'icon-eye-on' : 'icon-eye-off'
            }`}
          />
        </svg>
      </EyeButton>
    </PasswordLabel>
  );
};
