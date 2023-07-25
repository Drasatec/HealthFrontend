import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpecialtyComponent } from './all-specialty.component';

describe('AllSpecialtyComponent', () => {
  let component: AllSpecialtyComponent;
  let fixture: ComponentFixture<AllSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSpecialtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
