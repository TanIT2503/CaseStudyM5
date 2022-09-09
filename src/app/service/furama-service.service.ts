import { Injectable } from '@angular/core';
import {ServiceDAO} from "../data/ServiceDAO";
import {IFuramaServices} from "../models/IFuramaServices";


@Injectable({
  providedIn: 'root'
})
export class FuramaServiceService {
	saveService(service) {
		ServiceDAO.services.push(service);
	}

	getAll() {
		return ServiceDAO.services;
	}

	findById(serviceId: number) {
		return ServiceDAO.services.find((service) => service.serviceId === serviceId);
	}

	updateService(serviceId: number, service: IFuramaServices) {
		for (let i = 0; i < ServiceDAO.services.length; i++) {
			if (ServiceDAO.services[i].serviceId === serviceId) {
				ServiceDAO.services[i] = service;
			}
		}
	}
  constructor() { }
}
