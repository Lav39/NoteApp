import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private noteService:NoteService) { }


  ngOnInit() {    
  }

  
  createNewNote() {     
    this.noteService.createNote();  
    
  }
}
