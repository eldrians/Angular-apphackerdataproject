import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStoryComponent } from './list-story/list-story.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', component: ListStoryComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
