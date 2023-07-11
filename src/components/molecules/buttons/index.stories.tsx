import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Buttons } from './index';

export default {
  title: 'molecules/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

export const Default: ComponentStoryObj<typeof Buttons> = {
  args: {
    onClick: (isChecked, id) => {
      console.log(`${isChecked} : ${id}`);
    },
    items: [...Array(20)].map((_, i) => ({ id: `${i}`, text: `都道府県${i}` })),
  },
};
