import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mewtwo } from './mewtwo';

describe('Mewtwo', () => {
  let component: Mewtwo;
  let fixture: ComponentFixture<Mewtwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mewtwo],
    }).compileComponents();

    fixture = TestBed.createComponent(Mewtwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
