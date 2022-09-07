import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FuramaServicesComponent } from './furama-services/furama-services.component';
import { FuramaCustomersListComponent } from './furama-customers-list/furama-customers-list.component';
import { FuramaContractListComponent } from './furama-contract-list/furama-contract-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppRoutingModule} from "./app-routing.module";
import { FuramaServiceCreateComponent } from './furama-service-create/furama-service-create.component';
import { FuramaCustomerEditComponent } from './furama-customer-edit/furama-customer-edit.component';
import { FuramaServicesEditComponent } from './furama-services-edit/furama-services-edit.component';
import { FuramaCustomerCreateComponent } from './furama-customer-create/furama-customer-create.component';
import { FuramaContractCreateComponent } from './furama-contract-create/furama-contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    FuramaServicesComponent,
    FuramaCustomersListComponent,
    FuramaContractListComponent,
    FuramaServiceCreateComponent,
    FuramaCustomerEditComponent,
    FuramaServicesEditComponent,
    FuramaCustomerCreateComponent,
    FuramaContractCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
