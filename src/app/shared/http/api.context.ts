import { environments } from 'environments/environments';

export class ApiContext {
  static baseUrl: string = environments.apiUrl;

  static url(url: string = ''): string {
    return this.baseUrl + url;
  }
}
