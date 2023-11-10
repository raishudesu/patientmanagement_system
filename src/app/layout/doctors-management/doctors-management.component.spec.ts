import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsManagementComponent } from './doctors-management.component';

describe('DoctorsManagementComponent', () => {
  let component: DoctorsManagementComponent;
  let fixture: ComponentFixture<DoctorsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsManagementComponent]
    });
    fixture = TestBed.createComponent(DoctorsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
