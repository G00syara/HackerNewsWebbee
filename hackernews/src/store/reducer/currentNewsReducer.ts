import { CurrentNewsAction, CurrentNewsActionTypes, CurrentNewsState } from '../../types/currentNews';

const initialState: CurrentNewsState = {
  currentnews: {
    id: 0,
    title: '',
    points: 0,
    user: '',
    time: 0,
    time_ago: '',
    content: '',
    deleted: false,
    dead: false,
    type: '',
    url: '',
    domain: '',
    comments: [],
    level: 0,
    comments_count: 0,
    open: false,
  },
  comments: [],
  loading: false,
  error: null,
};

export const currentNewsReducer = (state = initialState, action: CurrentNewsAction): CurrentNewsState => {
  switch (action.type) {
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS:
      return {
        loading: true,
        error: null,
        currentnews: initialState.currentnews,
        comments: state.comments,
      };
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS_SUCCESS:
      return { ...state, currentnews: action.payload, loading: false, comments: action.payload.comments };
    case CurrentNewsActionTypes.FETCH_CURRENT_NEWS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
