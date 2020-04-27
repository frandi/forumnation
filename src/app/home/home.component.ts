import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../forum/models/search-params'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search : SearchParams;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.queryParamMap.subscribe(paramMap => {
      const paramLength = paramMap.keys.length

      var parent = {} as SearchParams
      var index = 0
      paramMap.keys.reverse().forEach(key => {
        let current = parent
        current.type = key
        current.value = paramMap.get(key)

        let hasParent = paramLength > index + 1
        if (hasParent) {
            parent = { nextParams: current } as SearchParams
        }

        index++
      })

      this.search = parent
    })
  }

}
