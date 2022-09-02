import { Component, OnInit } from '@angular/core';
import {IFuramaCustomer} from '../models/IFuramaCustomer';
import {CustomerDAO} from '../data/CustomerDAO';

@Component({
  selector: 'app-furama-customers-list',
  templateUrl: './furama-customers-list.component.html',
  styleUrls: ['./furama-customers-list.component.css']
})
export class FuramaCustomersListComponent implements OnInit {

  constructor() { }
  config: any;
  customers: IFuramaCustomer[] = CustomerDAO.getAllCustomers();
  p: number = 1;
  ngOnInit(): void {
  }

}
