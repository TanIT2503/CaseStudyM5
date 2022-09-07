import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaCustomersListComponent } from './furama-customers-list.component';

describe('FuramaCustomersListComponent', () => {
  let component: FuramaCustomersListComponent;
  let fixture: ComponentFixture<FuramaCustomersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaCustomersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaCustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
