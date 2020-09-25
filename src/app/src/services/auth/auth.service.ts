import {Injectable} from '@angular/core';
import {UserCredentials} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  public CheckCredentials(credentials: UserCredentials) {

  }
}
