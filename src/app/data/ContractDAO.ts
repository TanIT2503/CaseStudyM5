import { IFuramaContract } from "../models/IFuramaContract";

export class ContractDAO {
  static contracts: IFuramaContract[] = [
    {
      contractId: "HD-1001",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van A",
      contractEmployee: "Nguyen Van B",
      contractService: "Villa"
    },
    {
      contractId: "HD-1002",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van C",
      contractEmployee: "Nguyen Van D",
      contractService: "Villa"
    },
    {
      contractId: "HD-1003",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van E",
      contractEmployee: "Nguyen Van F",
      contractService: "Villa"
    },
    {
      contractId: "HD-1004",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van G",
      contractEmployee: "Nguyen Van H",
      contractService: "Villa"
    },
    {
      contractId: "HD-1005",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van I",
      contractEmployee: "Nguyen Van J",
      contractService: "Villa"
    },
    {
      contractId: "HD-1006",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van K",
      contractEmployee: "Nguyen Van L",
      contractService: "Villa"
    }
  ];
  static getAllContracts() {
    return this.contracts;
  }
}
