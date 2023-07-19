import { ButtonItems, Buttons } from '../../molecules/buttons';
import { Categories, PopulationType } from '../../molecules/categories';
import { Graph, HighchartsDataType } from '../../organisms/graph';
import '../populationGraphLayout/style.css';

type PopulationGraphLayoutProps = {
  onChange: (popilationType: PopulationType) => void;
  populationData: HighchartsDataType[];
  items: ButtonItems[];
  onClick: (isChecked: boolean, id: string) => void;
};

export const PopulationGraphLayout = ({
  onChange,
  populationData,
  items,
  onClick,
}: PopulationGraphLayoutProps) => {
  return (
    <>
      <h1 className="title">都道府県別人口推移</h1>
      <Categories
        onChange={(populationType: PopulationType) => onChange(populationType)}
      />
      <Graph populationData={populationData} />
      <Buttons
        items={items}
        onClick={(isChecked: boolean, id: string) => onClick(isChecked, id)}
      />
    </>
  );
};
