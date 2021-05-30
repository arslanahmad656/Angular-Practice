import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibTestComponent } from './my-lib-test.component';

describe('MyLibTestComponent', () => {
  let component: MyLibTestComponent;
  let fixture: ComponentFixture<MyLibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
