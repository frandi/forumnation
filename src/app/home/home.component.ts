import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../forum/models/search-params'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search : SearchParams;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.search = {
      type: 'keywprd',
      value: 'anything'
    } as SearchParams
  }

  getSearchParams(): SearchParams {
    var searchParams = {} as SearchParams

    var paramMap = this.route.snapshot.paramMap
    paramMap.keys.forEach(key => {
      var parentParam = searchParams
      var param = {type: key, value: paramMap.get(key)} as SearchParams

      if (parentParam) {
        parentParam.nextParams = param
      } else {
        searchParams = param
      }
    })

    var parent: SearchParams
    for (let index = paramMap.keys.length - 1; index >= 0; index--) {
      const type = paramMap.keys[index]
      const value = paramMap.get(type)
      const param = { type, value } as SearchParams

      if (index > 0) {
        parent = {nextParams: param} as SearchParams
      }

    }

    return searchParams
  }

}
