import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    HeaderComponent,
    TopicsComponent,
    TopicItemComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
