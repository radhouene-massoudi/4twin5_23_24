import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {AddUserComponent} from "../add-user/add-user.component";
import {UpdateUserComponent} from "../update-user/update-user.component";
import {DeleteUserComponent} from "../delete-user/delete-user.component";
import {ShowUserComponent} from "../show-user/show-user.component";
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ShowUserComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
