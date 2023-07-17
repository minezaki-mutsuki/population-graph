import { PopulationDataAllType } from '..';

export const onDeletePrefecture = (
  id: number,
  populationDataAll: PopulationDataAllType[],
  setPopulationDataAll: React.Dispatch<
    React.SetStateAction<PopulationDataAllType[]>
  >
) => {
  const copy = [...populationDataAll];
  const newData = copy.filter((item) => item.id !== id);
  setPopulationDataAll(newData);
};
