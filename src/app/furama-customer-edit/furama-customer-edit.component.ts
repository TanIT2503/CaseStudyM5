import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../service/customer-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
	selector: 'app-furama-customer-edit',
	templateUrl: './furama-customer-edit.component.html',
	styleUrls: ['./furama-customer-edit.component.scss']
})
export class FuramaCustomerEditComponent implements OnInit {
	formCustomerEdit: FormGroup;
	customerId: number;
	constructor(private customerService: CustomerServiceService,
				private activatedRouter: ActivatedRoute,
				private router: Router) {
	}
	ngOnInit(): void {
		this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
			this.customerId = +paramMap.get('id')
			const customer = this.customerService.findById(this.customerId);
			this.formCustomerEdit = new FormGroup({
				customerId: new FormControl(customer.customerId, [Validators.required, Validators.pattern('^\\d+$')]),
				customerBirthday: new FormControl(customer.customerBirthday, [Validators.required]),
				customerGender: new FormControl(customer.customerGender, [Validators.required]),
				customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
				customerType: new FormControl(customer.customerType, [Validators.required]),
				customerName: new FormControl(customer.customerName, [Validators.required]),
				customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
				customerIdentify: new FormControl(customer.customerIdentify, [Validators.required, Validators.pattern('/^[0-9]{10,12}$/')]),
				customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]),
			});
		})
	}
	updateCustomer(customerId: number) {
		const customer = this.formCustomerEdit.value;
		this.customerService.updateCustomer(customerId, customer);
		this.router.navigateByUrl('/furama-customer-list')
	}
}
