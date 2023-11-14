import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateprodductComponent} from "./updateprodduct/updateprodduct.component";
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:'add',component:AddProductComponent
  },
  {
    path:'list',component:ListProductComponent
  },

  {
    path:'updatep',component:UpdateProductComponent
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
