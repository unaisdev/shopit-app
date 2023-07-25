import Service from '.';
import { Item } from './types';

export const getItemsList = async (): Promise<Item[]> => {
  try {
    const { data } = await Service.get('/icons');

    return data;
  } catch (error) {
    console.log(error);

    throw Error;
  }
};
