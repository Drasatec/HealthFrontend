import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMethodComponent } from './confirm-method.component';

describe('ConfirmMethodComponent', () => {
  let component: ConfirmMethodComponent;
  let fixture: ComponentFixture<ConfirmMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
