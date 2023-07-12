import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Categories } from './index';

export default {
  title: 'molecules/Categories',
  component: Categories,
} as ComponentMeta<typeof Categories>;

export const Default: ComponentStoryObj<typeof Categories> = {
  args: {
    onChange: (populationType) => console.log(`selected : ${populationType}`),
  },
};
