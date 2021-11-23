import { createAction } from '@ngrx/store';

export const startLoading = createAction('[ UI ] Start Loading');
export const finishLoading = createAction('[ UI ] Finish Loading');
