import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingClientsPageComponent } from './booking-clients-page.component';

describe('BookingClientsPageComponent', () => {
  let component: BookingClientsPageComponent;
  let fixture: ComponentFixture<BookingClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingClientsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
