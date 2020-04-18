import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAtom, faComments, faBullhorn, faWrench, faCommentDots } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [MainLayoutComponent, LeftSidebarComponent, RightSidebarComponent, TopBarComponent, FooterComponent, JumbotronComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class MainLayoutModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faAtom, faBullhorn, faComments, faCommentDots, faWrench);
  }
}
