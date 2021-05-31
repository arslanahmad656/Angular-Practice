import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBasedFormComponent } from './template-based-form.component';

describe('TemplateBasedFormComponent', () => {
  let component: TemplateBasedFormComponent;
  let fixture: ComponentFixture<TemplateBasedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateBasedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBasedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
