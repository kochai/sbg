import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable()
export class UserModel {
  public user: User = null;

  constructor() { }

  public setUser(user: User): void {
    this.user = user;
  }
}
