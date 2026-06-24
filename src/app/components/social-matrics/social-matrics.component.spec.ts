import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMatricsComponent } from './social-matrics.component';

describe('SocialMatricsComponent', () => {
  let component: SocialMatricsComponent;
  let fixture: ComponentFixture<SocialMatricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMatricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
