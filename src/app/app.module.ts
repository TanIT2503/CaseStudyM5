import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FuramaServicesComponent } from './furama-services/furama-services.component';
import { FuramaServicesEditComponent } from './furama-services-edit/furama-services-edit.component';
import {RouterModule} from "@angular/router";
import { FuramaServiceCreateComponent } from './furama-service-create/furama-service-create.component';
import { FuramaCustomersListComponent } from './furama-customers-list/furama-customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FuramaServicesComponent,
    FuramaServicesEditComponent,
    FuramaServiceCreateComponent,
    FuramaCustomersListComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
