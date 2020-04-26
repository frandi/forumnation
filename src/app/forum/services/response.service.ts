import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getResponsesByPostId(postId: number): Observable<Response[]> {
    return this.get<Response[]>(`responses?postId=${postId}`)
  }
}
