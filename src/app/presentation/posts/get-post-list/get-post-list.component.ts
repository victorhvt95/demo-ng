import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetPostListUseCase } from '@application/use-cases';
import { Post } from '@domain/entities';
import { PostApiService } from '@infrastructure/services/post-api.service';

@Component({
  selector: 'app-get-postList',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-post-list.component.html',
  styleUrl: './get-post-list.component.scss',
  providers: [],
})
export class GetPostListComponent {
  postId: number = 0;
  posts: Post[] = [];

  constructor(
    private getPostList: GetPostListUseCase,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.getPostList.execute().subscribe({
      next: (posts) => (this.posts = posts),
      error: (error) => {
        console.error('Ocurrió un error al obtener posts:', error);
      },
    });
  }

  selectPost(postId: number) {
    this.router.navigate(['/posts', postId]);
    console.log('post seleccionado');
  }
}
