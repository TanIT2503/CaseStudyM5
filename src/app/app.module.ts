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
import { FuramaCustomerCreateComponent } from './furama-customer-create/furama-customer-create.component';
import {NgxRangeModule} from 'ngx-range';
import { FuramaContractListComponent } from './furama-contract-list/furama-contract-list.component';
import { FuramaContractCreateComponent } from './furama-contract-create/furama-contract-create.component';

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
    FuramaCustomerEditComponent,
    FuramaCustomerCreateComponent,
    FuramaContractListComponent,
    FuramaContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
