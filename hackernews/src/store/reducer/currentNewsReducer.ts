import { CurrentNewsAction, CurrentNewsActionTypes, CurrentNewsState } from '../../types/currentNews';

const initialState: CurrentNewsState = {
  currentnews: [],
  comments: [],
  loading: false,
  error: null,
};

export const currentNewsReducer = (state = initialState, action: CurrentNewsAction): CurrentNewsState => {
  switch (action.type) {
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS:
      return { loading: true, error: null, currentnews: [] };
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS_SUCCESS:
      return { loading: false, error: null, currentnews: action.payload, comments: action.payload.comments };
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR:
      return { loading: false, error: action.payload, currentnews: [] };
    default:
      return state;
  }
};
