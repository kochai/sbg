import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      return this.authService.getUserDetails()
        .then(() => this.authService.isAuthenticated())
        .catch(() => false);
    } else {
      return true;
    }
  }
}
