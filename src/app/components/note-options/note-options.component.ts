import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/Note';
@Component({
  selector: 'app-note-options',
  templateUrl: './note-options.component.html',
  styleUrls: ['./note-options.component.css']
})
export class NoteOptionsComponent implements OnInit { 
  @Input() selectedNote: Note;
  constructor() { }

  ngOnInit() {
  }

}