import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaContractCreateComponent } from './furama-contract-create.component';

describe('FuramaContractCreateComponent', () => {
  let component: FuramaContractCreateComponent;
  let fixture: ComponentFixture<FuramaContractCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaContractCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaContractCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
