import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.css']
})
export class ExpandCollapseComponent implements OnInit { 
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }
toggleNoteList(){
  this.noteService.toggleNoteList.isExpanded =! this.noteService.toggleNoteList.isExpanded;
 
  }
}
