import { Inject, Injectable } from '@angular/core';
import { POST_CONTRACT, PostContract } from '@domain/contracts';
import { Post } from '@domain/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetPostByIdUseCase {
  constructor(@Inject(POST_CONTRACT) private repository: PostContract) {}

  execute(postId: number): Observable<Post> {
    return this.repository.getPost(postId);
  }
}
