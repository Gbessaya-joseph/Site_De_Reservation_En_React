import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative,
  margin-bottom: 1rem;
`;

const Label = styled.label`
  position: relative;
  left: 0;
  right: 0;
  height: 100%;
  top: ${({ isActive }) => (isActive ? '-50%' : '50%')};
  transform: ${({ isActive }) => (isActive ? 'translateY(-10%) scale(.9)' : 'translateY(-10%)')};
  color: ${({ isActive }) => (isActive ? '#543423' : '#000')};
  font-size: ${({ isActive }) => (isActive ? '0.8rem' : '0.5rem')};
  font-weight: ${({ isActive }) => (isActive ? 'sans-serif' : 'normal')};
  background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
  padding: ${({ isActive }) => (isActive ? '0 5px' : '0')};
  transition: all 0.3s ease;
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: #543423;
  }
`;

export function Input({ children, icon, type }) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <InputContainer style={{ border: isActive ? '1px solid #543423' : '1px solid #ccc' , borderRadius: '4px', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', position: 'relative', width: '100%' }}>
      {icon && <div className="icon">{icon}</div>}
      <Label htmlFor="input" isActive={isActive} onFocus={handleFocus}
        onBlur={handleBlur}>{children}</Label>
      <StyledInput
        type={type}
        id="input"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
};

export default Input;
