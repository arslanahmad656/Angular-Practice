import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivePipeComponent } from './custom-directive-pipe.component';

describe('CustomDirectivePipeComponent', () => {
  let component: CustomDirectivePipeComponent;
  let fixture: ComponentFixture<CustomDirectivePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectivePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
