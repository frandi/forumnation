import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getCommentsByResponseId(responseId: number) : Observable<Comment[]> {
    return this.get<Comment[]>(`comments?responseId=${responseId}`)
  }
}
