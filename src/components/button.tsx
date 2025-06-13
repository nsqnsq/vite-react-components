import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        background: variant === 'primary' ? '#3498db' : '#e0e0e0',
        color: variant === 'primary' ? 'white' : '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};

export default Button;
