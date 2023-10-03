import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { DetailComponent } from './core/manageUser/detail/detail.component';
import { ShowUserComponent } from './core/manageUser/show-user/show-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'p',component:ProductsComponent},
  {path:'f',component:FirstComponent},
  {path:'user',component:ShowUserComponent, children:[
    {path:'detail/:id',component:DetailComponent},
  {path:'delete/:id',component:DeleteUserComponent},
  {path:'edit/:id',component:UpdateUserComponent},
  ]},

  


  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
