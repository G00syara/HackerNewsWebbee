import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentNewsAction, CurrentNewsActionTypes } from '../../types/currentNews';
import { NewsAction, NewsActionTypes } from '../../types/news';

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
      setTimeout(() => {
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data });
      }, 500);
    } catch (error) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Произошла ошибка при загрузке новостей' });
    }
  };
};

export const fetchCurrentNews = (id: any) => {
  return async (dispatch: Dispatch<CurrentNewsAction>) => {
    try {
      dispatch({ type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS });
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
      console.log(response.data.comments);
      setTimeout(() => {
        dispatch({
          type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новостей',
      });
    }
  };
};
