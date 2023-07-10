import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Example } from './index';

export default {
  title: 'atoms/Example',
  component: Example,
} as ComponentMeta<typeof Example>;

export const Default: ComponentStoryObj<typeof Example> = {
  args: {
    onClick: () => alert('onClick'),
  },
};
