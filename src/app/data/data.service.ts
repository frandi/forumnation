import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root'
})
export class DataService implements InMemoryDbService {
	constructor() {}

	createDb() {
		let categories = [
			{ id: 1, name: 'announcement', displayName: 'Announcement', displayIcon: 'bullhorn' },
			{ id: 2, name: 'support', displayName: 'Support', displayIcon: 'wrench' },
			{ id: 3, name: 'feedback', displayName: 'Feedback', displayIcon: 'comment-dots' }
		];

		return { categories };
	}
}
