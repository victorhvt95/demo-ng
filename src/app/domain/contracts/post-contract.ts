import { Observable } from 'rxjs';
import { Post } from '../entities/post';
import { InjectionToken } from '@angular/core';

export interface PostContract {
  getPostList(): Observable<Post[]>;
  getPost(postId: number): Observable<Post>;
}

export const POST_CONTRACT = new InjectionToken<PostContract>('POST_CONTRACT');
