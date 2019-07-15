import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthService,
      AuthInterceptor,
      UserModel
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(service).toBeTruthy();
  });
});
