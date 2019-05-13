import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { tap } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = '/api/login'; //'api/login'

  private authServiceErrorMsgSource = new Subject<string>();
  authServiceErrorMsg = this.authServiceErrorMsgSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  changeAuthServiceMsgError(message: string) {
    this.authServiceErrorMsgSource.next(message);
  }

  getHeaders(): { headers: HttpHeaders } {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      )
    };
    return httpOptions
  }

  /**
   * login
   */
  public login(username: string, password: string) {
    return this.http.post<User>(this.authUrl, JSON.stringify({ username: username, password: password }), this.getHeaders())
      .pipe(
        tap(
          (user: User) => {
            if (user) {
              localStorage.setItem('accesToken', user.token);
              console.log(`Login succesfull`);
            } else {
              console.log(`Login failed for username: ${username} with password : ${password}`);
            }
          }

        )
      )
  }

  /**
   * logout
   */
  public logout() {
    localStorage.removeItem('accesToken');
    this.router.navigate(['sign-in']);
  }
}
