import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	
	user: User;
	
	findUser(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.userService.findUser(id)
			.subscribe(user => this.user = user);
	}
	
	goBack(): void {
		this.location.back();
	}
	
	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private userService: UserService
	) { }
	
	ngOnInit() {
		this.findUser();
	}

}
