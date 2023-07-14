import { PopulationDataAllType } from '..';
import { PopulationType } from '../../../molecules/categories';
import { HighchartsDataType } from '../../../organisms/graph';

export const onCreatePopulationData = (
  populationType: PopulationType,
  populationDataAll: PopulationDataAllType[],
  setPopulationData: React.Dispatch<React.SetStateAction<HighchartsDataType[]>>
) => {
  const copy = [...populationDataAll];
  const newData: HighchartsDataType[] = [];

  copy.map((item) => {
    newData.push({
      type: item.data.all.type,
      data:
        populationType === 'all'
          ? item.data.all.data
          : populationType === 'young'
          ? item.data.young.data
          : populationType === 'adult'
          ? item.data.adult.data
          : item.data.old.data,
      name: item.data.all.name,
    });
  });

  setPopulationData(newData);
};
