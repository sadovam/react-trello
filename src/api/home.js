import { api } from '../constants';
import instance from './index';

export const getBoards = () => {
  return instance.get(api.boards);
}

export const createBoard = (title) => {
  return instance.post(api.boards, {title});
}

export const deleteBoard = (id) => {
  return instance.delete(api.boards + id);
}
