import { useEffect, useState } from 'react';
import { PopulationType } from '../../molecules/categories';
import { PopulationGraphLayout } from '../../templates/populationGraphLayout';

import { ButtonItems } from '../../molecules/buttons';
import { getPrefecture } from './models/resas';

export const PopulationGraph = () => {
  const [pre, setPre] = useState<ButtonItems[]>();
  useEffect(() => {
    getPrefecture(setPre);
  }, []);

  return pre ? (
    <PopulationGraphLayout
      onChange={function (popilationType: PopulationType): void {
        throw new Error('Function not implemented.');
      }}
      populationData={[]}
      items={pre}
      onClick={function (isChecked: boolean, id: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  ) : (
    <></>
  );
};
