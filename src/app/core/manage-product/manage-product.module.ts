import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductRoutingModule } from './manage-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateprodductComponent } from './updateprodduct/updateprodduct.component';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateprodductComponent
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule
  ]
})
export class ManageProductModule { }
