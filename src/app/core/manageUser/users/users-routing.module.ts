import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowUserComponent} from "../show-user/show-user.component";
import {DetailComponent} from "../detail/detail.component";
import {DeleteUserComponent} from "../delete-user/delete-user.component";
import {UpdateUserComponent} from "../update-user/update-user.component";

const routes: Routes = [
  {path:'user',component:ShowUserComponent, children:[
      {path:'detail/:id',component:DetailComponent},
      {path:'delete/:id',component:DeleteUserComponent},
      {path:'edit/:id',component:UpdateUserComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
