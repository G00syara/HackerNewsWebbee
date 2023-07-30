import { combineReducers } from '@reduxjs/toolkit';
import { currentNewsReducer } from './currentNewsReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({ newsList: newsReducer, currentNews: currentNewsReducer });

export type RootState = ReturnType<typeof rootReducer>;
