import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentComponent } from './content/content.component';
import {CoursesComponent} from './Courses/courses/courses.component';
import {LessonsComponent} from './lessons/lessons.component';
import {LanguageComponent} from './language/language.component';
import {LibraryComponent} from './library/library.component';

import { from } from 'rxjs';


const routes: Routes = [
{path:'', component:ContentComponent},
{path:'content', component:ContentComponent},
{path:'courses', component:CoursesComponent},
{path:'lessons', component:LessonsComponent},
{path:'language', component:LanguageComponent},
{path:'library', component:LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
