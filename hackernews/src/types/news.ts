import { NewsItem } from './types';

export interface NewsState {
  news: NewsItem[];
  loading: boolean;
  error: null | string;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}
interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: NewsItem[];
}
interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type NewsAction = FetchNewsAction | FetchNewsSuccessAction | FetchNewsErrorAction;
