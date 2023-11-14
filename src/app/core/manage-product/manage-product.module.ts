import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductRoutingModule } from './manage-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateprodductComponent } from './updateprodduct/updateprodduct.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateprodductComponent,
    UpdateProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    FormsModule
  ]
})
export class ManageProductModule { }
