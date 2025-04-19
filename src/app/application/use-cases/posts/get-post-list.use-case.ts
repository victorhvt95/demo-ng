import { POST_CONTRACT, PostContract } from '@domain/contracts';
import { Post } from '@domain/entities';
import { Observable } from 'rxjs';
import { UseCase } from '@application/use-cases';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPostListUseCase {
  constructor(@Inject(POST_CONTRACT) private repository: PostContract) {}

  public execute(): Observable<Post[]> {
    return this.repository.getPostList();
  }
}
