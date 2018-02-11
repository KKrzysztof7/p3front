import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGatunekComponent } from './list-gatunek.component';

describe('listGatunekComponent', () => {
  let component: ListGatunekComponent;
  let fixture: ComponentFixture<listGatunekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGatunekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGatunekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
