import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import appRoutes from "./app.routes";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [NgbModule.forRoot(), BrowserModule, FormsModule, HttpModule, appRoutes],
  bootstrap: [AppComponent]
})
export class AppModule {}
