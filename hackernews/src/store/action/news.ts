import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewsAction, NewsActionTypes } from '../../types/news';

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get('https://api.hnpwa.com/v0/newest/1.json');
      setTimeout(() => {
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data });
      }, 500);
    } catch (error) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Произошла ошибка при загрузке новостей' });
    }
  };
};
