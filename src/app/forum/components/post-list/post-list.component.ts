import { Component, OnInit, Input } from '@angular/core';
import { SearchParams } from '../../models/search-params';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  searchString: string

  @Input('search')
  searchParams: SearchParams

  constructor() { }

  ngOnInit(): void {
    this.searchString = JSON.stringify(this.searchParams)
  }

}
