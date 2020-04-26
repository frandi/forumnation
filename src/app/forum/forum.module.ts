import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [PostListComponent, PostItemComponent, ResponseListComponent, CommentListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PostListComponent
  ]
})
export class ForumModule { 
  constructor(private library: FaIconLibrary) {
		library.addIcons(faCalendar, faComment, faSearch);
	}
}
