const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/';
import fetch from 'node-fetch';
import { ButtonItem } from '../../../molecules/buttons';
import { PopulationDataAllType, PopulationDataType } from '..';

const API_KEY = process.env.REACT_APP_API_KEY ?? '';

type ResultItem = {
  prefCode: number;
  prefName: string;
};

export const getPrefectures = async () => {
  try {
    const res = await fetch(`${API_URL}prefectures`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    const result = await res.json();
    const resultItems: ResultItem[] = result.result;
    const buttonItems: ButtonItem[] = [];

    resultItems.forEach((item) => {
      const buttonItem: ButtonItem = {
        id: item.prefCode,
        text: item.prefName,
      };
      buttonItems.push(buttonItem);
    });
    return buttonItems;
  } catch (error) {
    console.log(error);
  }
};

export const onAddPrefecture = async (
  id: number,
  populationDataAll: PopulationDataAllType[],
  prefectures: ButtonItem[]
) => {
  try {
    const res = await fetch(
      `${API_URL}population/composition/perYear?cityCode=-&prefCode=${id}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': API_KEY,
        },
      }
    );
    const result = await res.json();
    const resultItems = result.result.data;

    const allData: number[] = [];
    const youngData: number[] = [];
    const adultData: number[] = [];
    const oldData: number[] = [];
    resultItems[0].data.map((item: { value: number }) => {
      allData.push(item.value);
    });
    resultItems[1].data.map((item: { value: number }) => {
      youngData.push(item.value);
    });
    resultItems[2].data.map((item: { value: number }) => {
      adultData.push(item.value);
    });
    resultItems[3].data.map((item: { value: number }) => {
      oldData.push(item.value);
    });

    const name: string | undefined = prefectures.find((item) => item.id === id)
      ?.text;

    if (name === undefined) return;

    const populationData: PopulationDataType = {
      all: {
        type: 'line',
        data: allData,
        name: name,
      },
      young: {
        type: 'line',
        data: youngData,
        name: name,
      },
      adult: {
        type: 'line',
        data: adultData,
        name: name,
      },
      old: {
        type: 'line',
        data: oldData,
        name: name,
      },
    };
    const copy = [...populationDataAll];
    copy.push({
      id: id,
      data: populationData,
    });

    return copy;
  } catch (error) {
    console.log(error);
  }
};
