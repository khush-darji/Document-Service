import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, label }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
