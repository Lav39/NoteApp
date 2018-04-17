import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteOptionsComponent } from './note-options.component';

describe('NoteOptionsComponent', () => {
  let component: NoteOptionsComponent;
  let fixture: ComponentFixture<NoteOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
