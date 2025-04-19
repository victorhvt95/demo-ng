import { environments } from 'environments/environments';

export class ApiRestaurantContext {
  static baseUrl: string = environments.apiRestaurantUrl;

  static url(url: string = ''): string {
    return this.baseUrl + url;
  }
}
