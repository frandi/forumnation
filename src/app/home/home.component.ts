import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../forum/models/search-params'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search : SearchParams;

  constructor() { }

  ngOnInit(): void {
    this.search = {
      type: 'keywprd',
      value: 'anything'
    } as SearchParams
  }

}
