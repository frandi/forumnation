import { BasePost } from './base-post';

export interface Post extends BasePost {
    title: string,
    responseNumber: number
}
