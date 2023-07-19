import { useEffect, useState } from 'react';
import { PopulationType } from '../../molecules/categories';
import { PopulationGraphLayout } from '../../templates/populationGraphLayout';
import { ButtonItem } from '../../molecules/buttons';
import { getPrefectures, onAddPrefecture } from './models/resas';
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
  const [prefectures, setPrefectures] = useState<ButtonItem[]>();
  const [populationDataAll, setPopulationDataAll] = useState<
    PopulationDataAllType[]
  >([]);
  const [populationData, setPopulationData] = useState<HighchartsDataType[]>(
    []
  );
  useEffect(() => {
    setPopulationType('all');
    getPrefectures(setPrefectures);
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
      {prefectures && populationData ? (
        <PopulationGraphLayout
          onPopulationTypeChange={(popilationType: PopulationType) => {
            setPopulationType(popilationType);
            setPopulationData([]);
          }}
          populationData={populationData}
          items={prefectures}
          onPopulationButtonClick={(isChecked: boolean, id: string) => {
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
                  prefectures
                );
          }}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};
