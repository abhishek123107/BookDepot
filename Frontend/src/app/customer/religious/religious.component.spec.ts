import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousComponent } from './religious.component';

describe('ReligiousComponent', () => {
  let component: ReligiousComponent;
  let fixture: ComponentFixture<ReligiousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligiousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligiousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
