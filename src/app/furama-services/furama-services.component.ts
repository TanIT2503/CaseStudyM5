import { Component, OnInit } from '@angular/core';
import { IFuramaServices } from '../models/IFuramaServices';
import { ServiceDAO } from '../data/ServiceDAO';

@Component({
  selector: 'app-furama-services',
  templateUrl: './furama-services.component.html',
  styleUrls: ['./furama-services.component.css']
})
export class FuramaServicesComponent implements OnInit {
  services: IFuramaServices[] = ServiceDAO.getAllServices();
  fakeArray = new Array(3);

  constructor() { }

  ngOnInit(): void {
  }

}
