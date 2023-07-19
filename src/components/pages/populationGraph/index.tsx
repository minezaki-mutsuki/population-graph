import { useEffect, useState } from 'react';
import { PopulationType } from '../../molecules/categories';
import { PopulationGraphLayout } from '../../templates/populationGraphLayout';
import { ButtonItems } from '../../molecules/buttons';
import { getPrefecture, onAddPrefecture } from './models/resas';
import { HighchartsDataType } from '../../organisms/graph';
import { onDeletePrefecture } from './models/onDeletePrefecture';
import { onCreatePopulationData } from './models/onCreatePopulationData';
import { Loading } from '../loading';
import '../populationGraph/style.css';

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
  const [populationType, setPopulationType] = useState<PopulationType>();
  const [prefecture, setPrefecture] = useState<ButtonItems[]>();
  const [populationDataAll, setPopulationDataAll] = useState<
    PopulationDataAllType[]
  >([]);
  const [populationData, setPopulationData] = useState<HighchartsDataType[]>(
    []
  );
  useEffect(() => {
    setPopulationType('all');
    getPrefecture(setPrefecture);
  }, []);

  useEffect(() => {
    if (populationType === undefined) return;
    onCreatePopulationData(
      populationType,
      populationDataAll,
      setPopulationData
    );
  }, [populationDataAll, populationType]);

  return (
    <div className="wrapper">
      {prefecture && populationData ? (
        <PopulationGraphLayout
          onChange={(popilationType: PopulationType) => {
            setPopulationType(popilationType);
            setPopulationData([]);
          }}
          populationData={populationData}
          items={prefecture}
          onClick={(isChecked: boolean, id: string) => {
            isChecked
              ? onDeletePrefecture(
                  Number(id),
                  populationDataAll,
                  setPopulationDataAll
                )
              : onAddPrefecture(
                  Number(id),
                  populationDataAll,
                  setPopulationDataAll,
                  prefecture
                );
          }}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};
