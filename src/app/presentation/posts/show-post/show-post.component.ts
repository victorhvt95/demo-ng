import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostByIdUseCase } from '@application/use-cases/posts/get-post-by-id.use-case';
import { Post } from '@domain/entities';

@Component({
  selector: 'app-show-post',
  imports: [CommonModule],
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.scss',
})
export class ShowPostComponent {
  postId: number;
  post: Post | null = null;
  constructor(
    private getPostById: GetPostByIdUseCase,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.postId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['postId'];
      this.getPost(this.postId);
    });
  }

  getPost(postId: number) {
    this.getPostById.execute(postId).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (error) => console.log(error),
    });
  }

  back() {
    this.location.back();
  }
}
