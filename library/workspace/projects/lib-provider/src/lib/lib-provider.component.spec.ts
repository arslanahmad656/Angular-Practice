import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibProviderComponent } from './lib-provider.component';

describe('LibProviderComponent', () => {
  let component: LibProviderComponent;
  let fixture: ComponentFixture<LibProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
