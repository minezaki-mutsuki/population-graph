import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Graph } from './index';

export default {
  title: 'organisms/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

export const Default: ComponentStoryObj<typeof Graph> = {
  args: {
    populationData: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        name: '北海道',
      },
      {
        type: 'line',
        data: [1.4, 2.4, 3.4],
        name: '青森県',
      },
    ],
  },
};
