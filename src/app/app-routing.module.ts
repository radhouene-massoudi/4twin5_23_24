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
import {MainInvoiceComponent} from "./Atelier3/main-invoice/main-invoice.component";
import {InvoiceComponent} from "./Atelier3/invoice/invoice.component";
import {DetailtwoComponent} from "./Atelier3/detailtwo/detailtwo.component";

const routes: Routes = [
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'invoiceM',component:MainInvoiceComponent},
  {path:'p',component:ProductsComponent},
  {path:'detail/:id/:etat',component:InvoiceComponent},
  {path:'invoice',component:DetailtwoComponent},

  {path:'f',component:FirstComponent},
  {path:'lazy',loadChildren:()=>import('../app/core/manageUser/users/users.module').then((m)=>m.UsersModule)},
  {path:'product',loadChildren:()=>import('../app/core/manage-product/manage-product.module').then((m)=>m.ManageProductModule)},



  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
