import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MdcAppBarModule, MdcTypographyModule, MdcIconModule } from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcAppBarModule,
    MdcTypographyModule,
    MdcIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
