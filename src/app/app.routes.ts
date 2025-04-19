import { Routes } from '@angular/router';
import { GetPostListUseCase } from '@application/use-cases';
import { GetPostByIdUseCase } from '@application/use-cases/posts/get-post-by-id.use-case';
import { POST_CONTRACT } from '@domain/contracts';
import { PostApiService } from '@infrastructure/services/post-api.service';
export const routes: Routes = [
  {
    path: 'posts',
    providers: [
      GetPostListUseCase,
      GetPostByIdUseCase,
      { provide: POST_CONTRACT, useClass: PostApiService },
    ],
    loadChildren: () =>
      import('@presentation/posts/posts.routes').then((m) => m.postRoutes),
  },
  {
    path: 'companies',
    providers: [],
    loadChildren: () =>
      import('@presentation/companies/companies.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
];
