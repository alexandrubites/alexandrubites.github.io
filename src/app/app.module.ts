import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkexperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
