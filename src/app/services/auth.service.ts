import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../models/user';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected httpClient: HttpClient,
              protected userModel: UserModel) { }

  public getToken(): string {
    return environment.authToken;
  }

  public isAuthenticated(): boolean {
    return this.userModel.user !== null;
  }

  public getUserDetails(): Promise<any> {
    return this.httpClient.get(`${environment.backendBaseUrl}/user`)
      .toPromise()
      .then((user: User) => {
        this.userModel.setUser(user);
      })
      .catch((err: HttpErrorResponse) => {
        throw new Error(err.message);
      });
  }
}
