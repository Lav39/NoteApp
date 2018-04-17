import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NoteOptionsComponent } from './components/note-options/note-options.component';
import { NoteService } from './services/note.service';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DeleteNoteComponent } from './components/delete-note/delete-note.component';
import { ExpandCollapseComponent } from './components/expand-collapse/expand-collapse.component';
import { DeepSearchComponent } from './components/deep-search/deep-search.component';
import { DateTimeFormatterPipe } from './pipes/date-time-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditorComponent,
    NoteOptionsComponent,
    CreateNoteComponent,
    DeleteNoteComponent,
    ExpandCollapseComponent,
    DeepSearchComponent,
    DateTimeFormatterPipe   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NoteService, DateTimeFormatterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
