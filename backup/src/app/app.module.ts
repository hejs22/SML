import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkryptComponent } from './skrypt/skrypt.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormularzComponent } from './formularz/formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    SkryptComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
