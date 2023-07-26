import { NewsItem } from './types';

export interface CurrentNewsState {
  currentnews?: any;
  comments?: NewsItem[];
  loading: boolean;
  error: null | string;
}

export enum CurrentNewsActionTypes {
  FETCH_CURRENT_NEWS = 'FETCH_CURRENT_NEWS',
  FETCH_CURRENT_NEWS_SUCCESS = 'FETCH_CURRENT_NEWS_SUCCESS',
  FETCH_CURRENT_NEWS_ERROR = 'FETCH_CURRENT_NEWS_ERROR',
}

interface FetchCurrentNewsAction {
  type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS;
}
interface FetchCurrentNewsSuccessAction {
  type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_SUCCESS;
  payload: NewsItem;
}

interface FetchCurrentNewsErrorAction {
  type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR;
  payload: string;
}

export type CurrentNewsAction = FetchCurrentNewsAction | FetchCurrentNewsErrorAction | FetchCurrentNewsSuccessAction;
