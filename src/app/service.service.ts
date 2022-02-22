import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addUser(userData: any): Observable<any> {
    return this.http.post(this.url + "/comments", userData )
  }

  getUserInfo(): Observable<any> {
    return this.http.get(this.url + "/comments");
  }
}
