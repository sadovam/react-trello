import { api } from '../constants';
import instance from './index';

export const getBoard = (id) => {
  return instance.get(api.boards + id);
}

export const updateBoardTitle = (boardId, title) => {
  return instance.put(api.boards + boardId, {title});
}

export const updateList = (boardId, listId, title) => {
  return instance.put(api.boards + boardId + '/list/' + listId, {title});
}

export const createList = (boardId, title) => {
  return instance.post(api.boards + boardId + '/list/', {title});
}

export const deleteList = (boardId, listId) => {
  return instance.delete(api.boards + boardId + '/list/' + listId);
}
