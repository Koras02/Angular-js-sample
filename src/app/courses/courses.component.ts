import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';
import {Course} from '../courser';
 

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses= COURSES;
  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(course: Course):void{
    this.selectedCourse = course;
  }
}
