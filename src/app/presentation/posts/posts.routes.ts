import { Routes } from '@angular/router';
import { GetPostListComponent } from './get-post-list/get-post-list.component';
import { ShowPostComponent } from './show-post/show-post.component';

export const postRoutes: Routes = [
  {
    path: '',
    component: GetPostListComponent,
  },
  {
    path: ':postId',
    component: ShowPostComponent,
  },
];
