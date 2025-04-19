import { Observable } from 'rxjs';

export interface UseCase<T> {
  execute(): Observable<T>;
}
