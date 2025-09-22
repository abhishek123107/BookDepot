import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibararyComponent } from './libarary.component';

describe('LibararyComponent', () => {
  let component: LibararyComponent;
  let fixture: ComponentFixture<LibararyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibararyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibararyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
