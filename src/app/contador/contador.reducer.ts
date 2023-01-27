import { Action } from 'rxjs/internal/scheduler/Action';
import { incrementar, decrementar } from './contador.actions';

// todo lo que ejecute el reducer tiene que poder realizarse con la informacion que PopStateEvent, es decir no realizan llamadas al exterior
export function contadorReducer(state: number = 10, action: any) {
  switch (action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    default:
      return state;
  }
}
