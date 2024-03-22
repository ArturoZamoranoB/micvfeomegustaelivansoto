import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchalamamaComponent } from './uchalamama.component';

describe('UchalamamaComponent', () => {
  let component: UchalamamaComponent;
  let fixture: ComponentFixture<UchalamamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UchalamamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UchalamamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
