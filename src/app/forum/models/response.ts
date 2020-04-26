import { BasePost } from './base-post';

export interface Response extends BasePost {
    points: number,
    commentNumber: number
}
