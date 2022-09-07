import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaServicesComponent } from './furama-services.component';

describe('FuramaServicesComponent', () => {
  let component: FuramaServicesComponent;
  let fixture: ComponentFixture<FuramaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
