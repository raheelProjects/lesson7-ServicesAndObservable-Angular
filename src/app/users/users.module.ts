import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  exports: [UserListComponent],
})
export class UsersModule {}
