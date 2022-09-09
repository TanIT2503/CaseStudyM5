import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FuramaServiceService} from "../service/furama-service.service";

@Component({
	selector: 'app-furama-service-create',
	templateUrl: './furama-service-create.component.html',
	styleUrls: ['./furama-service-create.component.scss']
})
export class FuramaServiceCreateComponent implements OnInit {
	formServiceCreate: FormGroup;

	constructor(private furamaService: FuramaServiceService) {
	}

	ngOnInit(): void {
		this.formServiceCreate = new FormGroup({
			serviceId: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			serviceName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
			serviceArea: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			servicePrice: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			serviceMaxPeople: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			serviceRendType: new FormControl('', [Validators.required]),
			serviceStandardRoom: new FormControl('', [Validators.required]),
			serviceDescription: new FormControl('', [Validators.required]),
			servicePoolArea: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			serviceFloor: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
			serviceImage: new FormControl('', [Validators.required]),
			serviceType: new FormControl('', [Validators.required]),
		});
	}
	submit() {
		const service = this.formServiceCreate.value;
		this.furamaService.saveService(service);
		this.formServiceCreate.reset();
	}
}
