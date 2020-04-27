import { Component, OnInit, Input } from '@angular/core';
import { SearchParams } from '../../models/search-params';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'forum-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private _searchParams: SearchParams

  searchString: string

  @Input('search') 
  set searchParams(value: SearchParams) {
    this._searchParams = value
    this.executeSearch(this._searchParams)
  }
  get searchParams(): SearchParams {
    return this._searchParams
  }

  posts: Post[]

  constructor(private postService : PostService) { }

  ngOnInit(): void { }

  executeSearch(searchParams: SearchParams) {
    console.log(`search params: ${JSON.stringify(searchParams)}`) 

    this.postService.getPostsBySearchParams(searchParams).subscribe(data => {
      this.posts = data
    }, error => {
      console.log(`Failed to get post collection. Error: ${error}`)
    })
  }

}
