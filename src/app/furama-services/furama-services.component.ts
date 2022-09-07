import { Component, OnInit } from '@angular/core';
import { IFuramaServices } from '../models/IFuramaServices';
import { ServiceDAO } from '../data/ServiceDAO';

@Component({
  selector: 'app-furama-services',
  templateUrl: './furama-services.component.html',
  styleUrls: ['./furama-services.component.scss']
})
export class FuramaServicesComponent implements OnInit {

  constructor() { }
  config: any;
  services: IFuramaServices[] = ServiceDAO.getAllServices();
  p: number = 1;

  ngOnInit(): void {
  }
}
