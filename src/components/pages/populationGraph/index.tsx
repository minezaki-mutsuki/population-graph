import { useEffect, useState } from 'react';
import { PopulationType } from '../../molecules/categories';
import { PopulationGraphLayout } from '../../templates/populationGraphLayout';

import { ButtonItems } from '../../molecules/buttons';
import { getPrefecture, onAddPrefecture } from './models/resas';
import { HighchartsDataType } from '../../organisms/graph';

export type PopulationDataType = {
  all: HighchartsDataType;
  young: HighchartsDataType;
  adult: HighchartsDataType;
  old: HighchartsDataType;
};
export type PopulationDataAllType = {
  id: number;
  data: PopulationDataType;
};

export const PopulationGraph = () => {
  const [populationType, setPopulationType] = useState<PopulationType>('all');
  const [prefecture, setPrefecture] = useState<ButtonItems[]>();
  const [populationDataAll, setPopulationDataAll] = useState<
    PopulationDataAllType[]
  >([]);
  const [populationData, setPopulationData] = useState<HighchartsDataType[]>(
    []
  );
  useEffect(() => {
    getPrefecture(setPrefecture);
  }, []);
  useEffect(() => {
    console.log(populationDataAll);
  }, [populationDataAll]);

  return prefecture && populationData ? (
    <PopulationGraphLayout
      onChange={(popilationType: PopulationType) =>
        setPopulationType(popilationType)
      }
      populationData={populationData}
      items={prefecture}
      onClick={(isChecked: boolean, id: string) => {
        isChecked
          ? console.log(id)
          : onAddPrefecture(
              Number(id),
              populationDataAll,
              setPopulationDataAll,
              prefecture
            );
      }}
    />
  ) : (
    <></>
  );
};
