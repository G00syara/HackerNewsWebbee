import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentNewsAction, CurrentNewsActionTypes } from '../../types/currentNews';
import { NewsAction, NewsActionTypes } from '../../types/news';
import { NewsItem } from '../../types/mainTypes';

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    const countNews = 100;
    const newsOnPage = 30;
    const countPages = Math.ceil(countNews / newsOnPage);

    const totalNews: NewsItem[] = [];
    for (let page = 1; page <= countPages; page++)
      try {
        dispatch({ type: NewsActionTypes.FETCH_NEWS });
        const response = await axios.get(`https://api.hnpwa.com/v0/newest/${page}.json`);
        if (response.data === null || typeof response.data === 'string' || typeof response.data === undefined) {
          dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Произошла ошибка при загрузке новостей' });
        } else {
          const newsOnPage = response.data;
          totalNews.push(...newsOnPage.slice(0, countNews));

          setTimeout(() => {
            dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: totalNews });
          }, 500);
        }
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
      console.log(response.data);
      if (response.data === null || typeof response.data === 'string' || typeof response.data === undefined) {
        dispatch({
          type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR,
          payload: 'Произошла ошибка при загрузке новости',
        });
      } else {
        setTimeout(() => {
          dispatch({
            type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_SUCCESS,
            payload: response.data,
          });
        }, 500);
      }
    } catch (error) {
      dispatch({
        type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новости',
      });
    }
  };
};
