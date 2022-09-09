import {Injectable} from '@angular/core';
import {CustomerDAO} from "../data/CustomerDAO";
import {IFuramaCustomer} from "../models/IFuramaCustomer";

@Injectable({
	providedIn: 'root'
})
export class CustomerServiceService {
	saveProduct(customer) {
		CustomerDAO.customers.push(customer);
	}

	getAll() {
		return CustomerDAO.customers;
	}

	findById(customerId: number) {
		return CustomerDAO.customers.find((customer) => customer.customerId === customerId);
	}

	updateCustomer(customerId: number, customer: IFuramaCustomer) {
		for (let i = 0; i < CustomerDAO.customers.length; i++) {
			if (CustomerDAO.customers[i].customerId === customerId) {
				CustomerDAO.customers[i] = customer;
			}
		}
	}

	constructor() {
	}
}
