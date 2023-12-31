import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { ShowUserComponent } from './core/manageUser/show-user/show-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import {MainInvoiceComponent} from "./Atelier3/main-invoice/main-invoice.component";
import {InvoiceComponent} from "./Atelier3/invoice/invoice.component";
import {DetailtwoComponent} from "./Atelier3/detailtwo/detailtwo.component";
import { C1Component } from './cours/c1/c1.component';
import { C2Component } from './cours/c2/c2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FromuserComponent } from './fromuser/fromuser.component';
import { AddProducctComponent } from './correction exam/add-producct/add-producct.component';
import { HomeComponent } from './correction exam/home/home.component';
import { ShowShopingComponent } from './correction exam/show-shoping/show-shoping.component';
import { DetailComponent } from './correction exam/detail/detail.component';
import { NotfoundComponent } from './correction exam/notfound/notfound.component';

const routes: Routes = [
  {path:'add',component:AddProducctComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:ShowShopingComponent},
  {path:'detail/:id',component:DetailComponent},
  /*
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'invoiceM',component:MainInvoiceComponent},
  {path:'p',component:ProductsComponent},
  {path:'detail/:id/:etat',component:InvoiceComponent},
  {path:'invoice',component:DetailtwoComponent},
  {path:'c1',component:C1Component},
  {path:'userform',component:FromuserComponent},
  {path:'c2',component:C2Component},
  {path:'f',component:FirstComponent},
  {path:'reactive',component:ReactiveformComponent},
  {path:'lazy',loadChildren:()=>import('../app/core/manageUser/users/users.module').then((m)=>m.UsersModule)},
  {path:'product',loadChildren:()=>import('../app/core/manage-product/manage-product.module').then((m)=>m.ManageProductModule)},



  {path:'**',component:NotfoundComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
