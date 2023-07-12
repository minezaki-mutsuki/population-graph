import { useState } from 'react';
import '../categories/style.css';

export type PopulationType = 'all' | 'young' | 'adult' | 'old';

type CategoriesProps = {
  onChange: (popilationType: PopulationType) => void;
};

type CategoriesType = {
  value: PopulationType;
  string: string;
};

export const Categories = ({ onChange }: CategoriesProps) => {
  const categories: CategoriesType[] = [
    { value: 'all', string: '総人口' },
    { value: 'young', string: '年少人口' },
    { value: 'adult', string: '生産年齢人口' },
    { value: 'old', string: '老年人口' },
  ];
  const [selectedCategories, setSelectedCategories] =
    useState<PopulationType>('all');

  return (
    <>
      <div className="categories-wrapper">
        {categories.map((item) => (
          <button
            className={
              selectedCategories === item.value
                ? 'selected-button'
                : 'not-selected-button'
            }
            key={item.value}
            onClick={() => {
              if (item.value === selectedCategories) return;
              setSelectedCategories(item.value);
              onChange(item.value);
            }}
          >
            {item.string}
          </button>
        ))}
      </div>
      <h2 className="category-title">
        {categories.map(
          (item) => item.value === selectedCategories && item.string
        )}
      </h2>
    </>
  );
};
