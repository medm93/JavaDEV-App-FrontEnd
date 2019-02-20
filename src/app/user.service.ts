import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	findUser(id: number): Observable<User> {
		return of(USERS.find(user => user.id === id));
	}
	
	findAllUsers(): Observable<User[]> {
		return of(USERS);
	}
	
	
	

	constructor() { }
}