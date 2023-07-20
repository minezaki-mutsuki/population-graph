import { PopulationDataAllType } from '..';

export const onDeletePrefecture = (
  id: number,
  populationDataAll: PopulationDataAllType[]
) => {
  const copy = [...populationDataAll];
  const newData = copy.filter((item) => item.id !== id);
  return newData;
};
