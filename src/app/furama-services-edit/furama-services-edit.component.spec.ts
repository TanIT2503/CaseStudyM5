import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaServicesEditComponent } from './furama-services-edit.component';

describe('FuramaServicesEditComponent', () => {
  let component: FuramaServicesEditComponent;
  let fixture: ComponentFixture<FuramaServicesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaServicesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
