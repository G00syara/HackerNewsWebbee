import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducer/index';

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;
