import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpecsComponent } from './search-specs.component';

describe('SearchSpecsComponent', () => {
  let component: SearchSpecsComponent;
  let fixture: ComponentFixture<SearchSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSpecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
