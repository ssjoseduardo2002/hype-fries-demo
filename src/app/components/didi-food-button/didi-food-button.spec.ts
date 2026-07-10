import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidiFoodButton } from './didi-food-button';

describe('DidiFoodButton', () => {
  let component: DidiFoodButton;
  let fixture: ComponentFixture<DidiFoodButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DidiFoodButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidiFoodButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
