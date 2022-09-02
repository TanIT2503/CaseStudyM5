import { AboutComponent } from './about/about.component';
import { FuramaServicesComponent } from './furama-services/furama-services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuramaCustomerEditComponent } from './furama-customer-edit/furama-customer-edit.component';
import { FuramaServicesEditComponent } from './furama-services-edit/furama-services-edit.component';
import { FuramaCustomersListComponent } from './furama-customers-list/furama-customers-list.component';
import { FuramaContractListComponent } from './furama-contract-list/furama-contract-list.component';


const routes: Routes = [
  { path: 'furama-services', component: FuramaServicesComponent },
  { path: 'furama-services-edit', component: FuramaServicesEditComponent },
  { path: 'furama-customer-list', component: FuramaCustomersListComponent },
  { path: 'furama-contract-list', component: FuramaContractListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
