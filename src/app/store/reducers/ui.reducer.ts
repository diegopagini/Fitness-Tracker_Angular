import { Action, createReducer, on } from '@ngrx/store';
import { finishLoading, startLoading } from '../actions/ui.action';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false,
};

export const _uiReducer = createReducer(
  initialState,
  on(startLoading, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(finishLoading, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export function uiReducer(state = initialState, action: Action) {
  return _uiReducer(state, action);
}
