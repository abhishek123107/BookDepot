import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptativeComponent } from './comptative.component';

describe('ComptativeComponent', () => {
  let component: ComptativeComponent;
  let fixture: ComponentFixture<ComptativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
