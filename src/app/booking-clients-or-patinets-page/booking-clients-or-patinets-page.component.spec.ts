import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingClientsOrPatinetsPageComponent } from './booking-clients-or-patinets-page.component';

describe('BookingClientsOrPatinetsPageComponent', () => {
  let component: BookingClientsOrPatinetsPageComponent;
  let fixture: ComponentFixture<BookingClientsOrPatinetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingClientsOrPatinetsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingClientsOrPatinetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
