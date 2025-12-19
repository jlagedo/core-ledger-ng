import {Injectable, signal} from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();

  constructor() {
    this.initMocker();
  }

  initMocker() {
    this._currentUser.set({
      id: 19290,
      username: 'jlagedo',
      email: 'jlagedo@example.com',
      firstName: 'Jonny',
      lastName: 'Bravo',
      roles: ['user', 'admin'],
      isActive: true,
      lastLoginAt: new Date()
    });
  }

}
