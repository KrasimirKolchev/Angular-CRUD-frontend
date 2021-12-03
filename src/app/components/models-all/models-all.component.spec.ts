import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAllComponent } from './models-all.component';

describe('ModelsAllComponent', () => {
  let component: ModelsAllComponent;
  let fixture: ComponentFixture<ModelsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
