import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ChangeColorDirective } from './change-color.directive';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { DetailComponent } from './core/manageUser/detail/detail.component';
import {UsersModule} from "./core/manageUser/users/users.module";
import { ManageProductModule } from './core/manage-product/manage-product.module';
import { MainInvoiceComponent } from './Atelier3/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Atelier3/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Atelier3/invoice/invoice.component';
import { DetailtwoComponent } from './Atelier3/detailtwo/detailtwo.component';
import { C1Component } from './cours/c1/c1.component';
import { C2Component } from './cours/c2/c2.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FromuserComponent } from './fromuser/fromuser.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowoneproductComponent } from './showoneproduct/showoneproduct.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AddCategoryComponent } from './CRUDCategoriesIn_out_put/add-category/add-category.component';
import { UpdateCategoryComponent } from './CRUDCategoriesIn_out_put/update-category/update-category.component';
import { CategorysComponent } from './CRUDCategoriesIn_out_put/categorys/categorys.component';
import { DetailCategoyComponent } from './CRUDCategoriesIn_out_put/detail-categoy/detail-categoy.component';
import { RemoveCategoyComponent } from './CRUDCategoriesIn_out_put/remove-categoy/remove-categoy.component';
import { ErrorComponent } from './CRUDCategoriesIn_out_put/error/error.component';
import { AddProducctComponent } from './correction exam/add-producct/add-producct.component';
  import { HomeComponent } from './correction exam/home/home.component';
import { ShowShopingComponent } from './correction exam/show-shoping/show-shoping.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductsComponent,
    ChangeColorDirective,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    DetailComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    DetailtwoComponent,
    C1Component,
    C2Component,
    ReactiveformComponent,
    FromuserComponent,
    TvComponent,
    MobileComponent,
    ShowoneproductComponent,
    ChildComponent,
    ParentComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    CategorysComponent,
    DetailCategoyComponent,
    RemoveCategoyComponent,
    ErrorComponent,
    AddProducctComponent,
    HomeComponent,
    ShowShopingComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
    ManageProductModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
