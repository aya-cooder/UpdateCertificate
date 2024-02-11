import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamComponent } from './islam.component';

describe('IslamComponent', () => {
  let component: IslamComponent;
  let fixture: ComponentFixture<IslamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
