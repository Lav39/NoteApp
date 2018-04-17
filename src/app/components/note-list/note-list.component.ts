import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/Note';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[];
  @Output() onSelectNote = new EventEmitter<Note>();
  @Input() selectedNote: Note;  
  constructor() { }

  ngOnInit() { }

 selectNote(note: Note) {       
    this.onSelectNote.emit(note);
  }
}
