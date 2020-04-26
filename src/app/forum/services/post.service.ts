import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { SearchParams } from '../models/search-params';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  getPosts(): Observable<Post[]> {
    return this.get<Post[]>('posts')
  }

  getPostsBySearchParams(searchParams: SearchParams): Observable<Post[]> {
    let paramsString = this.getSearchParamsString(searchParams)
    return this.get<Post[]>(`posts`)
  }

  getPostById(id: number): Observable<Post>{
    return this.get<Post>(`posts?id=${id}`)
  }

  private getSearchParamsString(searchParams: SearchParams) {
    var paramsString : string

    var params = searchParams;
    while (params) {
      if (paramsString) {
        paramsString += '&'
      } else {
        paramsString = ''
      }
      
      paramsString += `${params.type}=${params.value}`

      params = params.nextParams
    }
  }
}
