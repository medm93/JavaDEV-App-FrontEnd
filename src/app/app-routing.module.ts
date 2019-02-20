import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'},
	{ path: 'users', component: UsersComponent },
	{ path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
