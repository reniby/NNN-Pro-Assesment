import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;