import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';



@NgModule({
  declarations: [PostListComponent, PostItemComponent, ResponseListComponent, CommentListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class ForumModule { }
