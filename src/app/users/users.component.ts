import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	
	user: User = {
		id: 1,
		firstName: 'Harry',
		lastName: 'Potter',
		email: 'harry.potter@hogward.uk',
		password: 'zaq1@WSX',
		yearOfStudy: '1',
		fieldOfStudy: 'magic',
		indexNumber: '123456'
	};
	
	constructor() { }
	
	ngOnInit() {
  }

}
