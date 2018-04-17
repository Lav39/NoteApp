import { Injectable } from '@angular/core';
import { Note } from '../models/Note';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class NoteService {
  toggleNoteList = {
    isExpanded : true
  }
  count = 1;
  private noteActivity = new BehaviorSubject<Boolean>(false); 
  watch = this.noteActivity.asObservable();
  NOTES: Note[] = [
    {
      id: this.count,
      timeStamp: new Date(),
      title: "Calligraphy",
      description: "Modern calligraphy ranges from functional inscriptions and designs to fine-art pieces where the letters may or may not be readable",
      isHidden: false
    },{
      id: ++this.count,
      timeStamp: new Date('04/16/2018'),
      title: "Lorem IpSum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isHidden: false
    },{
      id: ++this.count,
      timeStamp: new Date('03/16/2018'),
      title: "Indian Premier League",
      description: "The IPL is the most-attended cricket league in the world and in 2014 ranked sixth by average attendance among all sports leagues",
      isHidden: false
    },{
      id: ++this.count,
      timeStamp: new Date('03/16/2017'),
      title: "Bollywood",
      description: "Traditional hand block print Handicrafts artisan in India Batik craftswomen in Java, Indonesia drawing batik.A handicraft Selling-Factory shop, Isfahan-Iran Typical Filipino handmade brooms in a restaurant of Banaue Municipal Town.A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools",
      isHidden: false
    }
  ];
  constructor() {
    if(localStorage && !localStorage.getItem('notes')){
      this.updateLocalStorage();  
    }        
   }

  getNotes(): Observable<Note[]> {
    let notes = JSON.parse(localStorage.getItem('notes'));    
    return of(notes);
  }

  deleteNote(note: Note){
    if(!note)
      return;
    let index = -1;
     this.NOTES.forEach( (n,key) => { if(n.id == note.id) { index = key} } );
     if(index > -1) {
      this.NOTES.splice(index,1);
     }  
     this.updateLocalStorage();
     this.noteActivity.next(true);     
  }

  createNote(){   
    this.NOTES.unshift(
      {
      id: ++this.count,
      title: 'New Note',
      description: 'Write text body here',
      timeStamp: new Date(),
      isHidden: false
    }
    );
    this.updateLocalStorage();
    this.noteActivity.next(true);
  }
  updateNote(note:Note){    
    this.NOTES = this.NOTES.map( n => {
      if(n.id == note.id){
        return note;
      } else {
        return n;
      }      
    });
    console.log('after',note,this.NOTES);
    this.updateLocalStorage();
    this.noteActivity.next(true);
  }
  deepSearch(searchText:any) {
    searchText = searchText.toLocaleLowerCase();
    this.NOTES.forEach( (note) => {
      if( note.title.toLocaleLowerCase().indexOf(searchText) > -1 
        || note.description.toLocaleLowerCase().indexOf(searchText) > -1)
        {
          note.isHidden = false;
        }else {
          note.isHidden = true;
        }
    })
  }
  updateLocalStorage(){
    if(localStorage){
      localStorage.setItem('notes',JSON.stringify(this.NOTES));
    }
  }

}
