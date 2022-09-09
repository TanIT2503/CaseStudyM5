import { Injectable } from '@angular/core';
import { ContractDAO } from '../data/ContractDAO';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
	saveContract(contract) {
		ContractDAO.contracts.push(contract);
	}

	getAll() {
		return ContractDAO.contracts;
	}
  constructor() { }
}
