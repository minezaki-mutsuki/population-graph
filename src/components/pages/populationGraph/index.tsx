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
  const [populationType, setPopulationType] = useState<PopulationType>('all');
  const [prefectures, setPrefectures] = useState<ButtonItem[]>();
  const [populationDataAll, setPopulationDataAll] = useState<
    PopulationDataAllType[]
  >([]);
  const [populationData, setPopulationData] = useState<HighchartsDataType[]>(
    []
  );

  useEffect(() => {
    const fetchPrefectures = async () => {
      const prefecturesData = await getPrefectures();
      setPrefectures(prefecturesData);
    };
    fetchPrefectures();
  }, []);

  useEffect(() => {
    const fetchPopulationData = async () => {
      const newPopulationData = await onCreatePopulationData(
        populationType,
        populationDataAll
      );
      setPopulationData(newPopulationData);
    };
    fetchPopulationData();
  }, [populationDataAll, populationType]);

  const fetchAddPrefecture = async (id: number) => {
    if (!prefectures) return;
    const newPopulationDataAll = await onAddPrefecture(
      id,
      populationDataAll,
      prefectures
    );
    if (!newPopulationDataAll) return;
    setPopulationDataAll(newPopulationDataAll);
  };

  const fetchDeletePrefecture = async (id: number) => {
    const newPopulationDataAll = await onDeletePrefecture(
      id,
      populationDataAll
    );
    setPopulationDataAll(newPopulationDataAll);
  };

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
          onPopulationButtonClick={(isChecked: boolean, id: number) => {
            isChecked ? fetchDeletePrefecture(id) : fetchAddPrefecture(id);
          }}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};
