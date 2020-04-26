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
		]

		let posts = [
			{ id: 1, title: 'Post #1', content: 'This is post number one.', category: 'announcement'},
			{ id: 2, title: 'Post #2', content: 'This is post number two.', category: 'announcement'},
			{ id: 3, title: 'Post #3', content: 'This is post number three.', category: 'support'},
			{ id: 4, title: 'Post #4', content: 'This is post number four.', category: 'feedback'},
			{ id: 5, title: 'Post #5', content: 'This is post number five.', category: 'feedback'}
		]

		let responses = [
			{ id: 1, postId: 1, content: 'This is the first response for post #1'},
			{ id: 2, postId: 1, content: 'This is the second response for post #1'},
			{ id: 3, postId: 2, content: 'This is the first response for post #2'},
			{ id: 4, postId: 3, content: 'This is the first response for post #3'},
			{ id: 5, postId: 4, content: 'This is the first response for post #4'}
		]

		let comments = [
			{ id: 1, responseId: 1, content: 'This is a comment for response #1'},
			{ id: 2, responseId: 1, content: 'This is another comment for response #1'},
			{ id: 3, responseId: 4, content: 'This is a comment for response #4'},
			{ id: 4, responseId: 5, content: 'This is a comment for response #5'},
		]

		return { categories, posts, responses, comments }
	}
}
