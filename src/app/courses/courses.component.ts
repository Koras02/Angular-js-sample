import { CourseService } from './../course.service';
import { Course } from './../courser';
import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit { 
  
  course: Course[];
  selectedCourse: Course;

  constructor(private CourseService: CourseService) { }

  ngOnInit() {
   this.getCourses();
  }
  onSelect(course: Course):void{
    this.selectedCourse = course;
}
getCourses(): void{
  this.CourseService.getCourses().subscribe(courses=>this.course=courses);
}
}

