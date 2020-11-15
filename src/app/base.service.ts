import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global} from './shared/global'
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  header = new HttpHeaders();
  constructor(public http : HttpClient) { }

  post(route: string, obj: any): Observable<any> {
    return this.http.post(global.BASE_API_URL + route, obj, {
      headers: this.header,
    });
  }

  get(route: string): Observable<any> {
    return this.http.get(global.BASE_API_URL + route, {
      headers: this.header,
    });
  }

  update(route: string, obj: any): Observable<any> {
    return this.http.put(global.BASE_API_URL + route, obj, {
      headers: this.header,
    });
  }
  
  delete(route: string): Observable<any> {
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete( global.BASE_API_URL + route, {
      headers: this.header,
    });
  }
  
}
