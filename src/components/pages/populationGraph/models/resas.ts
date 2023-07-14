const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/';
import fetch from 'node-fetch';
import React from 'react';
import { ButtonItems } from '../../../molecules/buttons';
import { HighchartsDataType } from '../../../organisms/graph';
import { PopulationDataAllType, PopulationDataType } from '..';

const API_KEY = process.env.REACT_APP_API_KEY ?? '';

type ResultItems = {
  prefCode: number;
  prefName: string;
};

export const getPrefecture = async (
  setPrefecture: React.Dispatch<React.SetStateAction<ButtonItems[] | undefined>>
) => {
  try {
    const res = await fetch(`${API_URL}prefectures`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    const result = await res.json();
    const resultItems: ResultItems[] = result.result;
    const buttonItems: ButtonItems[] = [];

    resultItems.forEach((item) => {
      const buttonItem: ButtonItems = {
        id: item.prefCode.toString(),
        text: item.prefName,
      };
      buttonItems.push(buttonItem);
    });
    setPrefecture(buttonItems);
  } catch (error) {
    console.log(error);
  }
};

export const onAddPrefecture = async (
  id: number,
  populationDataAll: PopulationDataAllType[],
  setPopulationDataAll: React.Dispatch<
    React.SetStateAction<PopulationDataAllType[]>
  >,
  prefecture: ButtonItems[]
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

    const name: string | undefined = prefecture.find(
      (item) => item.id === id.toString()
    )?.text;

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
    setPopulationDataAll(copy);
  } catch (error) {
    console.log(error);
  }
};
