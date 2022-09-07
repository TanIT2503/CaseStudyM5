import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaCustomerCreateComponent } from './furama-customer-create.component';

describe('FuramaCustomerCreateComponent', () => {
  let component: FuramaCustomerCreateComponent;
  let fixture: ComponentFixture<FuramaCustomerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaCustomerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaCustomerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
