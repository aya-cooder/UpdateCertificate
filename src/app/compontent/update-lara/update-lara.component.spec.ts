import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaraComponent } from './update-lara.component';

describe('UpdateLaraComponent', () => {
  let component: UpdateLaraComponent;
  let fixture: ComponentFixture<UpdateLaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
