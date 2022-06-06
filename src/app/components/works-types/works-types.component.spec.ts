import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTypesComponent } from './works-types.component';

describe('WorksTypesComponent', () => {
  let component: WorksTypesComponent;
  let fixture: ComponentFixture<WorksTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
