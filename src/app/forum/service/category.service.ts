import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
      var categories = [
        { name: 'announcement', displayName: 'Announcement', displayIcon: 'bullhorn' } as Category,
        { name: 'support', displayName: 'Support', displayIcon: 'wrench' } as Category,
        { name: 'feedback', displayName: 'Feedback', displayIcon: 'comment-dots' } as Category,
      ]

      observer.next(categories)
      observer.complete();
    })
  }
}
