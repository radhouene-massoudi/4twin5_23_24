import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
    ManageProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
