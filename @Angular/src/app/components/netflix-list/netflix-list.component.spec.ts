import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixListComponent } from './netflix-list.component';

describe('NetflixListComponent', () => {
  let component: NetflixListComponent;
  let fixture: ComponentFixture<NetflixListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
