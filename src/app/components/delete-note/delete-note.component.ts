import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
 @Input() selectedNote: Note;
 notes: Note[];
 newNote: Note;
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }
  deleteNote(){
    this.noteService.deleteNote(this.selectedNote);
  }

}
