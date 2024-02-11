import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEslam2Component } from './update-eslam2.component';

describe('UpdateEslam2Component', () => {
  let component: UpdateEslam2Component;
  let fixture: ComponentFixture<UpdateEslam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEslam2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEslam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
