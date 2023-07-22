import { combineReducers } from '@reduxjs/toolkit';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({ new: newsReducer });

export type RootState = ReturnType<typeof rootReducer>;
