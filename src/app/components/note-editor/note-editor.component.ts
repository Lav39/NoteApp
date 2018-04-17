import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/Note';
@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit, OnChanges{
  @Input() selectedNote: Note;
  today = new Date(); 
  titleText: string;
  bodyText: string;
  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.titleText = this.selectedNote.title;
    this.bodyText = this.selectedNote.description;
  }
  ngOnChanges(changes: SimpleChanges){
    this.titleText = changes.selectedNote.currentValue.title;
    this.bodyText = changes.selectedNote.currentValue.description;
  }
  onTitleChange(value){ 
    if(value == "") {
      this.selectedNote.title = 'New Note';
    } else {
      this.selectedNote.title = value;
    }
    this.selectedNote.timeStamp = new Date();
  }
  onDescriptionChange(value){
    if(value == "") {
      this.selectedNote.description = 'No additional Information';
    } else {
      this.selectedNote.description = value;
    }
    this.selectedNote.timeStamp = new Date();
  }
  onBlurMethod(){    
    this.noteService.updateNote(this.selectedNote);
  }
}
