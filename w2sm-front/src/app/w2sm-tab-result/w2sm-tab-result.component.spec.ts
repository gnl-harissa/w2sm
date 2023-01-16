import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2smTabResultComponent } from './w2sm-tab-result.component';

describe('W2smTabResultComponent', () => {
  let component: W2smTabResultComponent;
  let fixture: ComponentFixture<W2smTabResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2smTabResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W2smTabResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
