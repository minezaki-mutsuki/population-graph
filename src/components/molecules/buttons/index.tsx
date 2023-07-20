import { Button } from '../../atoms/button';
import '../buttons/style.css';

export type ButtonItem = {
  text: string;
  id: number;
};

type ButtonsProps = {
  items: ButtonItem[];
  onClick: (isChecked: boolean, id: number) => void;
};

export const Buttons = ({ items, onClick }: ButtonsProps) => {
  return (
    <div className="buttons-wrapper">
      {items.map((item) => (
        <Button
          key={item.id}
          text={item.text}
          onClick={(isChecked) => onClick(isChecked, item.id)}
        />
      ))}
    </div>
  );
};
