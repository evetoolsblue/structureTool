import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpwellRefiningComponent } from './upwell-refining.component';

describe('UpwellRefiningComponent', () => {
  let component: UpwellRefiningComponent;
  let fixture: ComponentFixture<UpwellRefiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpwellRefiningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpwellRefiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
