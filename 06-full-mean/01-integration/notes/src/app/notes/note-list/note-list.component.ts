import { Component, OnInit } from '@angular/core';
import { NOTES } from 'src/app/data';
import { Note } from 'src/app/models';
import { NoteService } from '../../services';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = NOTES;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe(notes => {
        console.log('got notes?', notes, this);
        this.notes = notes;
      });
  }

  onCreate(createdNote: Note) {
    console.log('creating note', createdNote);
    // this.notes.push(createdBook);

    this.noteService.createNote(createdNote)
      .subscribe(newNote => {
        console.log('new note', newNote);
        // this.notes.push(newBook);
        this.notes = [...this.notes, newNote];
      });
  }

}
