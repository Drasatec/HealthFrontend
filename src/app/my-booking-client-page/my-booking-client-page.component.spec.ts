import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingClientPageComponent } from './my-booking-client-page.component';

describe('MyBookingClientPageComponent', () => {
  let component: MyBookingClientPageComponent;
  let fixture: ComponentFixture<MyBookingClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookingClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookingClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
