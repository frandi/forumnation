import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service.service';

@Injectable({
	providedIn: 'root'
})
export class CategoryService extends BaseService {
	
	constructor(httpClient: HttpClient) {
		super(httpClient);
	}

	getCategories(): Observable<Category[]> {
		return this.get<Category[]>('categories');
	}
}
