import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUsernComponent } from './board-usern.component';

describe('BoardUsernComponent', () => {
  let component: BoardUsernComponent;
  let fixture: ComponentFixture<BoardUsernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUsernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardUsernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
