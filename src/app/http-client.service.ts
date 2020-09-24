import { Injectable, Input } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  user: User;

  constructor() {}

  getUsers(): User {
    return this.user;
  }
}
