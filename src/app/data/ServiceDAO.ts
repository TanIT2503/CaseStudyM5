import { IFuramaServices } from '../models/IFuramaServices';

export class ServiceDAO {
  static services: IFuramaServices[] = [
    {
      serviceId: 1,
      serviceName: 'Diamond Hotel (Room)',
      serviceArea: 30,
      servicePrice: 2000000,
      serviceMaxPeople: 2,
      serviceRendType: 'Tháng',
      serviceStandardRoom: 'Vip',
      serviceDescription: 'No',
      servicePoolArea: 0,
      serviceFloor: 0,
      serviceImage: 'https://kenhhomestay.com/wp-content/uploads/2021/05/villa-hoi-an-11.jpg',
      serviceType: 'Room',
    },
    {
      serviceId: 2,
      serviceName: 'De Champion House',
      serviceArea: 30,
      servicePrice: 3000000,
      serviceMaxPeople: 3,
      serviceRendType: 'Tuần',
      serviceStandardRoom: 'Vip',
      serviceDescription: 'No',
      servicePoolArea: 20,
      serviceFloor: 2,
      serviceImage: 'https://kenhhomestay.com/wp-content/uploads/2021/05/villa-hoi-an-17.jpg',
      serviceType: 'House',
    },
    {
      serviceId: 3,
      serviceName: ' House',
      serviceArea: 30,
      servicePrice: 3000000,
      serviceMaxPeople: 3,
      serviceRendType: 'Tuần',
      serviceStandardRoom: 'Vip',
      serviceDescription: 'No',
      servicePoolArea: 20,
      serviceFloor: 2,
      serviceImage: 'https://kenhhomestay.com/wp-content/uploads/2021/05/villa-hoi-an-17.jpg',
      serviceType: 'House',
    },
    {
      serviceId: 45,
      serviceName: 'sfdjsakfh House',
      serviceArea: 30,
      servicePrice: 3000000,
      serviceMaxPeople: 3,
      serviceRendType: 'Tuần',
      serviceStandardRoom: 'Vip',
      serviceDescription: 'No',
      servicePoolArea: 20,
      serviceFloor: 2,
      serviceImage: 'https://kenhhomestay.com/wp-content/uploads/2021/05/villa-hoi-an-17.jpg',
      serviceType: 'House',
    },
  ];
  static getAllServices() {
    return this.services;
  }
}
