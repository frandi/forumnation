import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  API_URL: string = 'api/';

  constructor(private httpClient : HttpClient) { }

  get<T>(query: string) : Observable<T> {
    return this.httpClient.get<T>(this.API_URL + query)
  }
}
