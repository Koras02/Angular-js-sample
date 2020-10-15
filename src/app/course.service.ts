import { MessagesService } from'./messages.service';
import { COURSES } from './mock-courses';
import { Course } from './courser';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private messagesService: MessagesService) { }
  
   getCourses(): Observable<course[]> {
     this.messagesService.add('CourseService: fetched course')
     return of(COURSES);
   }
}
