import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoursesComponent } from './Courses/courses/courses.component';
import { DetailCoursesComponent } from './Courses/detail-courses/detail-courses/detail-courses.component';
import { ShowCoursesComponent } from './Courses/show-courses/show-courses/show-courses.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
//import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NewCoursesComponent } from './Courses/new-courses/new-courses.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';
import { from } from 'rxjs';
//services
import { DataService } from './data.service';
import {  ContentsService} from './contents.service';
import { LanguageService } from './services/language.service';
import { LibraryService } from './services/library.service';
import { LessonService } from './services/lesson.service';
import { CoursService } from './services/cours.service';
//componet
import { LessonsComponent } from './lessons/lessons.component';
import { LanguageComponent } from './language/language.component';
import { CoursesComponent } from './Courses/courses/courses.component';
import { ContentComponent } from './content/content.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    DetailCoursesComponent,
    ShowCoursesComponent,
    BodyComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    NewCoursesComponent,
    LessonsComponent,
    LanguageComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
