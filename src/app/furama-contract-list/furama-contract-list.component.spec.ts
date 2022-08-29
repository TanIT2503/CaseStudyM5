import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaContractListComponent } from './furama-contract-list.component';

describe('FuramaContractListComponent', () => {
  let component: FuramaContractListComponent;
  let fixture: ComponentFixture<FuramaContractListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaContractListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
