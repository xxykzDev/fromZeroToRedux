import { createAction } from '@ngrx/store';

// creamos las acciones
export const incrementar = createAction('[Contador] incrementar');
export const decrementar = createAction('[Contador] decrementar');
