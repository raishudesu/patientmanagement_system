import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPatientsComponent } from './view-my-patients.component';

describe('ViewMyPatientsComponent', () => {
  let component: ViewMyPatientsComponent;
  let fixture: ComponentFixture<ViewMyPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMyPatientsComponent]
    });
    fixture = TestBed.createComponent(ViewMyPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
