import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimesComponent } from './alltimes.component';

describe('AlltimesComponent', () => {
  let component: AlltimesComponent;
  let fixture: ComponentFixture<AlltimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
