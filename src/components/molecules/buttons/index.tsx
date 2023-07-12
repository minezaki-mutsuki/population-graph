import { Button } from '../../atoms/button';
import '../buttons/style.css';

export type ButtonItems = {
  text: string;
  id: string;
};

type ButtonsProps = {
  items: ButtonItems[];
  onClick: (isChecked: boolean, id: string) => void;
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
