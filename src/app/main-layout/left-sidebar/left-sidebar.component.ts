import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/forum/services/category.service';
import { Category } from 'src/app/forum/models/category';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  categories: Category[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    }, error => {
      console.log(`Error getting categories: ${error}`);
    })
  }

}
