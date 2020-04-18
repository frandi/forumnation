import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	API_URL: string = 'http://localhost:8080/api/';

	constructor(private httpClient: HttpClient) {}

	getCategories(): Observable<Category[]> {
		return this.httpClient.get<Category[]>(this.API_URL + 'categories');
	}
}
