import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bullbasaur } from './bullbasaur';

describe('Bullbasaur', () => {
  let component: Bullbasaur;
  let fixture: ComponentFixture<Bullbasaur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bullbasaur],
    }).compileComponents();

    fixture = TestBed.createComponent(Bullbasaur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
