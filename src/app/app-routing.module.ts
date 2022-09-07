import { AboutComponent } from './about/about.component';
import { FuramaServicesComponent } from './furama-services/furama-services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuramaServicesEditComponent } from './furama-services-edit/furama-services-edit.component';
import { FuramaCustomersListComponent } from './furama-customers-list/furama-customers-list.component';
import { FuramaContractListComponent } from './furama-contract-list/furama-contract-list.component';
import {FuramaServiceCreateComponent} from "./furama-service-create/furama-service-create.component";
import {FuramaCustomerEditComponent} from "./furama-customer-edit/furama-customer-edit.component";
import {FuramaCustomerCreateComponent} from "./furama-customer-create/furama-customer-create.component";
import {FuramaContractCreateComponent} from "./furama-contract-create/furama-contract-create.component";


const routes: Routes = [
  { path: 'furama-services', component: FuramaServicesComponent },
  { path: 'furama-services-edit', component: FuramaServicesEditComponent },
  { path: 'furama-services-create', component: FuramaServiceCreateComponent },
  { path: 'furama-customer-list', component: FuramaCustomersListComponent },
  { path: 'furama-customer-edit', component: FuramaCustomerEditComponent },
  { path: 'furama-customer-create', component: FuramaCustomerCreateComponent },
  { path: 'furama-contract-list', component: FuramaContractListComponent },
  { path: 'furama-contract-create', component: FuramaContractCreateComponent },
  { path: '', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
