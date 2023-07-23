export interface CurrentNewsState {
  currentnews: any;
  comments?: any[];
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
  payload: any;
}

interface FetchCurrentNewsErrorAction {
  type: CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR;
  payload: string;
}

export type CurrentNewsAction = FetchCurrentNewsAction | FetchCurrentNewsErrorAction | FetchCurrentNewsSuccessAction;
