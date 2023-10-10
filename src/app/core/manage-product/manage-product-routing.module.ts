import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateprodductComponent} from "./updateprodduct/updateprodduct.component";

const routes: Routes = [
  {
    path:'add',component:AddProductComponent
  },
  {
    path:'update',component:UpdateprodductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductRoutingModule { }
