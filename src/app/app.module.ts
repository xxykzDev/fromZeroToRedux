import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ngrx
import { StoreModule } from '@ngrx/store';
//reducer
import { contadorReducer } from './contador/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // indicamos el state y reducer
    StoreModule.forRoot({ contador: contadorReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
