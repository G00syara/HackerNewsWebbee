export interface NewsState {
  news: any[];
  loading: boolean;
  error: null | string;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  UPLOAD_NEWS = 'UPLOAD_NEWS',
  SET_CURRENT_NEWS = 'SET_CURRENT_NEWS',
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}
interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: any[];
}
interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}
interface UploadNewsAction {
  type: NewsActionTypes.UPLOAD_NEWS;
  payload: any[];
}
interface SetCurrentNewsAcrion {
  type: NewsActionTypes.SET_CURRENT_NEWS;
  payload: any[];
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction
  | UploadNewsAction
  | SetCurrentNewsAcrion;
