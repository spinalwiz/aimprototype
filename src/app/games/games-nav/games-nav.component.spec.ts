/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamesNavComponent } from './games-nav.component';

describe('GamesNavComponent', () => {
  let component: GamesNavComponent;
  let fixture: ComponentFixture<GamesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
