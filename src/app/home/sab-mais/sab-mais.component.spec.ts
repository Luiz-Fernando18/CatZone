import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabMaisComponent } from './sab-mais.component';

describe('SabMaisComponent', () => {
  let component: SabMaisComponent;
  let fixture: ComponentFixture<SabMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
