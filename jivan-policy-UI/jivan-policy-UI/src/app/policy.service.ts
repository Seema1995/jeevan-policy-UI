import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private client : HttpClient) {

   }

  url = "http://localhost:8082/policy";

  registerUser(registerUser : any): Observable<any>{
    let url = `${this.url}/register`
    return this.client.post(url,registerUser);
  }

  login(registerUser : any): Observable<any>{
    let url = `${this.url}/login`
    return this.client.post(url,registerUser);
  }
}
