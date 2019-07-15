import { TestBed } from '@angular/core/testing';

import { UserGuardService } from './user-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user';

describe('UserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserGuardService,
      UserModel
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: UserGuardService = TestBed.get(UserGuardService);
    expect(service).toBeTruthy();
  });
});
