import { useState } from 'react';
import '../button/style.css';

type ButtonProps = {
  text: string;
  onClick: (isChecked: boolean) => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      className={`button ${isChecked ? 'button-on' : 'button-off'}`}
      onClick={() => {
        setIsChecked(!isChecked);
        onClick(isChecked);
      }}
    >
      {text}
    </button>
  );
};
