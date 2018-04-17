import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-deep-search',
  templateUrl: './deep-search.component.html',
  styleUrls: ['./deep-search.component.css']
})
export class DeepSearchComponent implements OnInit {
  private searchText: string = '';
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }
  onSearchChange(searchValue : string ) {  
    this.noteService.deepSearch(searchValue);
  }
}
