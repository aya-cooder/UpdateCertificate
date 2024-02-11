import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEslam1Component } from './update-eslam1.component';

describe('UpdateEslam1Component', () => {
  let component: UpdateEslam1Component;
  let fixture: ComponentFixture<UpdateEslam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEslam1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEslam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
