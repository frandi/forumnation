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
    console.log(`[POST] /posts${paramsString}`)
    return this.get<Post[]>(`posts${paramsString}`)
  }

  getPostById(id: number): Observable<Post>{
    return this.get<Post>(`posts?id=${id}`)
  }

  private getSearchParamsString(searchParams: SearchParams) {
    var paramsString : string = ''

    var params = searchParams;
    while (params) {
      if (paramsString.length > 0) {
        paramsString += '&'
      } else {
        paramsString += '?'
      }

      var searchBy: string
      switch (params.type) {
        case 'c':
          searchBy = 'category'
          break;
      }
      
      if (searchBy !== undefined) {
        paramsString += `${searchBy}=${params.value}`
      }

      params = params.nextParams
    }

    return paramsString
  }
}
