import { Component, OnInit, Injectable } from '@angular/core';
import { ContentsService } from '../../contents.service';
import { Cours } from 'src/app/shared/cours';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  cour:Cours[];

  constructor(private courService: ContentsService) { }
  ngOnInit() {
    this.courService.getCours().subscribe(Owners=> {
      this.cour=Owners;
      console.log(this.cour);
    });
  
   
  }
}
