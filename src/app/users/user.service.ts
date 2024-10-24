import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getData(): User[] {
    return [
      {
        id: 1,
        name: 'Bisham',
        proffesion: 'Frontend Developer',
        age: 23,
      },
      {
        id: 2,
        name: 'Hassan',
        proffesion: 'Frontend Developer',
        age: 24,
      },
      {
        id: 3,
        name: 'Raheel',
        proffesion: 'Fullstack Developer',
        age: 23,
      },
      {
        id: 4,
        name: 'Zaid',
        proffesion: 'Sales Manager',
        age: 26,
      },
    ];
  }
}
