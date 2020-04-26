import { Component, OnInit, Input } from '@angular/core';
import { SearchParams } from '../../models/search-params';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  searchString: string

  @Input('search')
  searchParams: SearchParams

  posts: Post[]

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    console.log(`search params: ${JSON.stringify(this.searchParams)}`) 

    this.postService.getPostsBySearchParams(this.searchParams).subscribe(data => {
      this.posts = data
    }, error => {
      console.log(`Failed to get post collection. Error: ${error}`)
    })
  }

}
