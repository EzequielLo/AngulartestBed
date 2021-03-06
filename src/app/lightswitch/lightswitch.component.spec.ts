import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightswitchComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i);
    component.clicked();
    expect(component.message).toMatch(/is on/i);
  });

});
