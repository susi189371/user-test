import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public apiEndpoint;
  constructor(public http: HttpClient) { }

  login(params) {
    this.apiEndpoint = '/api/login';
    return this.http.post(this.apiEndpoint, params);
  }

  getPage(token) {
    const httpOptions = {
      headers: new HttpHeaders(
        { "Authorization": token, Scope: 'customer' }
      )
    };
    this.apiEndpoint = '/api/getData';
    return this.http.get(this.apiEndpoint, httpOptions);

  }

}
