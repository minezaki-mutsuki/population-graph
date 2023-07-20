import { ButtonItem, Buttons } from '../../molecules/buttons';
import { Categories, PopulationType } from '../../molecules/categories';
import { Graph, HighchartsDataType } from '../../organisms/graph';
import '../populationGraphLayout/style.css';

type PopulationGraphLayoutProps = {
  onPopulationTypeChange: (popilationType: PopulationType) => void;
  populationData: HighchartsDataType[];
  items: ButtonItem[];
  onPopulationButtonClick: (isChecked: boolean, id: number) => void;
};

export const PopulationGraphLayout = ({
  onPopulationTypeChange,
  populationData,
  items,
  onPopulationButtonClick,
}: PopulationGraphLayoutProps) => {
  return (
    <>
      <h1 className="title">都道府県別人口推移</h1>
      <Categories
        onChange={(populationType: PopulationType) =>
          onPopulationTypeChange(populationType)
        }
      />
      <Graph populationData={populationData} />
      <Buttons
        items={items}
        onClick={(isChecked: boolean, id: number) =>
          onPopulationButtonClick(isChecked, id)
        }
      />
    </>
  );
};
