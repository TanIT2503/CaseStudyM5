import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FuramaServicesEditComponent } from './furama-services-edit/furama-services-edit.component';
import { FuramaServicesComponent } from './furama-services/furama-services.component';
import { FuramaServiceCreateComponent } from './furama-service-create/furama-service-create.component';
import { FuramaCustomersListComponent } from './furama-customers-list/furama-customers-list.component';
import { FooterComponent } from './footer/footer.component';
import { FuramaCustomerEditComponent } from './furama-customer-edit/furama-customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FuramaServicesEditComponent,
    FuramaServicesComponent,
    FuramaServiceCreateComponent,
    FuramaCustomersListComponent,
    FooterComponent,
    FuramaCustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
