import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }