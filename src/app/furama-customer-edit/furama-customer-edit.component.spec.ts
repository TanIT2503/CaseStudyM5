import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaCustomerEditComponent } from './furama-customer-edit.component';

describe('FuramaCustomerEditComponent', () => {
  let component: FuramaCustomerEditComponent;
  let fixture: ComponentFixture<FuramaCustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaCustomerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
