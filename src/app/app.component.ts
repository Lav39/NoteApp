import { Component, OnInit } from '@angular/core';
import { Note } from '../app/models/Note';
import { NoteService } from '../app/services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NoteApp';
  notes: Note [];
  selectedNote: Note;
  toggleNoteList: any = this.noteService.toggleNoteList;
  constructor(private noteService: NoteService) { 
    this.noteService.watch.subscribe( value => {
      if(value){
        this.getNotes();
      }
    });
  }

  ngOnInit() {
    this.getNotes();    
  }

  getNotes(){
    this.noteService.getNotes()
    .subscribe( notes => this.notes = notes );
    if( this.notes.length ){
      this.selectedNote = this.notes[0];
    }
  }
  onSelectNote(note: Note): void { 
    this.selectedNote = note;    
  } 
}
