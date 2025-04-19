import { HttpParams } from '@angular/common/http';

export class QueryParamsBuilder {
  static build(paramsObject: Record<string, any>): HttpParams {
    let params = new HttpParams();

    for (const key in paramsObject) {
      const value = paramsObject[key];
      if (value !== undefined && value !== null) {
        params = params.set(key, value.toString());
      }
    }

    return params;
  }
}
