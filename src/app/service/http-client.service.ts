import { Injectable, Input } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8087/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>(
      'http://localhost:8080/users/add',
      newUser
    );
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8081/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8081/books/get');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>(
      'http://localhost:8081/books/add',
      newBook
    );
  }
}
