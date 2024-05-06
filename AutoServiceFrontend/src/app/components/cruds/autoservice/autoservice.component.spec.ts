import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoserviceComponent } from './autoservice.component';

describe('AutoserviceComponent', () => {
  let component: AutoserviceComponent;
  let fixture: ComponentFixture<AutoserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
