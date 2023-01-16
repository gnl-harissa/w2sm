import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2smTabResultLineComponent } from './w2sm-tab-result-line.component';

describe('W2smTabResultLineComponent', () => {
  let component: W2smTabResultLineComponent;
  let fixture: ComponentFixture<W2smTabResultLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2smTabResultLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W2smTabResultLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
