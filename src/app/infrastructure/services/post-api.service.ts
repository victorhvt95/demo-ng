import { Observable } from 'rxjs';
import { PostContract } from '@domain/contracts/post-contract';
import { Post } from '@domain/entities/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiContext } from '@shared/http/api.context';

@Injectable({
  providedIn: 'root',
})
export class PostApiService implements PostContract {
  constructor(private http: HttpClient) {}

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(ApiContext.url('/posts'), { params: {} });
  }
  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(ApiContext.url('/posts/' + postId));
  }
}
