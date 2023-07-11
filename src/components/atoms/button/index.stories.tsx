import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    text: 'テキスト',
    onClick: (isChecked) => console.log(isChecked ? 'on' : 'off'),
  },
};
