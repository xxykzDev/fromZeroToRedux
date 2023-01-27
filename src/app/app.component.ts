import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface appState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fromZeroToRedux';

  contador: number = 0;

  constructor(private store: Store<appState>) {
    this.store.subscribe((state) => {
      this.contador = state.contador;
      console.log(state);
    });
  }

  increment() {
    this.store.dispatch(actions.incrementar());
  }

  decrement() {
    this.store.dispatch(actions.decrementar());
  }
}
