import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkexperienceComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    LanguagesComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
