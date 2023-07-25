import Service from './http';
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

interface Lists {
  key: string;
  title: string;
}
export const getLists = async (): Promise<Lists[]> => {
  try {
    // {"count": 1, "items": [{"key": "05dkuaba63sb", "title": "test"}]}
    const { data } = await Service.get('/getList');

    console.log({ data });

    return data.lists.items;
  } catch (error) {
    console.log(error);

    throw Error;
  }
};

interface CreateList {
  title: string;
}
export const createList = async (data: CreateList): Promise<Item[]> => {
  try {
    const response = await Service.post('/createList', data);

    return response.data.list;
  } catch (error) {
    console.log(error);

    throw Error;
  }
};
