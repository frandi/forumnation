import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { ForumModule } from './forum/forum.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MainLayoutModule,
    ForumModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCalendar, faComment, faSearch);
  }
}
