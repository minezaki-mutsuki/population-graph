const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/';
import fetch from 'node-fetch';
import React from 'react';
import { ButtonItems } from '../../../molecules/buttons';

const API_KEY = process.env.REACT_APP_API_KEY ?? '';

type ResultItems = {
  prefCode: number;
  prefName: string;
};

export const getPrefecture = async (
  setPre: React.Dispatch<React.SetStateAction<ButtonItems[] | undefined>>
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
    setPre(buttonItems);
  } catch (error) {
    console.log(error);
  }
};
