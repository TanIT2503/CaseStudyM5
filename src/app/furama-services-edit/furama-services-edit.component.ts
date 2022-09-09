import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FuramaServiceService} from "../service/furama-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
	selector: 'app-furama-services-edit',
	templateUrl: './furama-services-edit.component.html',
	styleUrls: ['./furama-services-edit.component.scss']
})
export class FuramaServicesEditComponent implements OnInit {
	formServiceEdit: FormGroup;
	serviceId: number;
	constructor(private furamaService: FuramaServiceService,
				private activatedRouter: ActivatedRoute,
				private router: Router) { }

	ngOnInit(): void {
		this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
			this.serviceId = +paramMap.get('id')
			const service = this.furamaService.findById(this.serviceId);
			this.formServiceEdit = new FormGroup({
				serviceId: new FormControl(service.serviceId, [Validators.required, Validators.pattern('^\\d+$')]),
				serviceName: new FormControl(service.serviceName, [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
				serviceArea: new FormControl(service.serviceArea, [Validators.required, Validators.pattern('^\\d+$')]),
				servicePrice: new FormControl(service.servicePrice, [Validators.required, Validators.pattern('^\\d+$')]),
				serviceMaxPeople: new FormControl(service.serviceMaxPeople, [Validators.required, Validators.pattern('^\\d+$')]),
				serviceRendType: new FormControl(service.serviceRendType, [Validators.required]),
				serviceStandardRoom: new FormControl(service.serviceStandardRoom, [Validators.required]),
				serviceDescription: new FormControl(service.serviceDescription, [Validators.required]),
				servicePoolArea: new FormControl(service.servicePoolArea, [Validators.required, Validators.pattern('^\\d+$')]),
				serviceFloor: new FormControl(service.serviceFloor, [Validators.required, Validators.pattern('^\\d+$')]),
				serviceImage: new FormControl(service.serviceImage, [Validators.required]),
				serviceType: new FormControl(service.serviceType, [Validators.required]),
			});
		});
	}
	updateService(serviceId: number) {
		const service = this.formServiceEdit.value;
		this.furamaService.updateService(serviceId, service);
		this.router.navigateByUrl('/furama-services')
	}
}
