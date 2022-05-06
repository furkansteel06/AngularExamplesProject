import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdersHomeComponent } from './placeholders-home.component';

describe('PlaceholdersHomeComponent', () => {
  let component: PlaceholdersHomeComponent;
  let fixture: ComponentFixture<PlaceholdersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholdersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholdersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
