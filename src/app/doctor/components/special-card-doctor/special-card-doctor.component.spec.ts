import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCardDoctorComponent } from './special-card-doctor.component';

describe('SpecialCardDoctorComponent', () => {
  let component: SpecialCardDoctorComponent;
  let fixture: ComponentFixture<SpecialCardDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCardDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialCardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
