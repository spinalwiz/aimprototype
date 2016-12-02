/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatsNavComponent } from './stats-nav.component';

describe('StatsNavComponent', () => {
  let component: StatsNavComponent;
  let fixture: ComponentFixture<StatsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
