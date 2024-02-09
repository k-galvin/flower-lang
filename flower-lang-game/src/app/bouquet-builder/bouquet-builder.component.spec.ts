import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetBuilderComponent } from './bouquet-builder.component';

describe('BouquetBuilderComponent', () => {
  let component: BouquetBuilderComponent;
  let fixture: ComponentFixture<BouquetBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouquetBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BouquetBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
