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
import { AddUserComponent } from './core/manageUser/add-user/add-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { ShowUserComponent } from './core/manageUser/show-user/show-user.component';

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
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
