import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userAPIEndPoint = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.userAPIEndPoint);
  }
  // return [
  //   {
  //     id: 1,
  //     name: 'Bisham',
  //     proffesion: 'Frontend Developer',
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     name: 'Hassan',
  //     proffesion: 'Frontend Developer',
  //     age: 24,
  //   },
  //   {
  //     id: 3,
  //     name: 'Raheel',
  //     proffesion: 'Fullstack Developer',
  //     age: 23,
  //   },
  //   {
  //     id: 4,
  //     name: 'Zaid',
  //     proffesion: 'Sales Manager',
  //     age: 26,
  //   },
  // ];
}
