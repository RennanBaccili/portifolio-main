import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfListComponent } from './inf-list.component';

describe('InfListComponent', () => {
  let component: InfListComponent;
  let fixture: ComponentFixture<InfListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfListComponent]
    });
    fixture = TestBed.createComponent(InfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
