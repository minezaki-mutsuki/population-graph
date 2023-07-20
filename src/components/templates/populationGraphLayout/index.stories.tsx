import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { PopulationGraphLayout } from './index';

export default {
  title: 'templates/PopulationGraphLayout',
  component: PopulationGraphLayout,
} as ComponentMeta<typeof PopulationGraphLayout>;

export const Default: ComponentStoryObj<typeof PopulationGraphLayout> = {
  args: {
    onPopulationTypeChange: (populationType) =>
      console.log(`selected : ${populationType}`),
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
    onPopulationButtonClick: (isChecked, id) => {
      console.log(`${isChecked} : ${id}`);
    },
    items: [...Array(20)].map((_, i) => ({ id: i, text: `都道府県${i}` })),
  },
};
