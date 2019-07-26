import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models';
import { NgForm } from '@angular/forms';
import { NoteService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note = new Note();

  @Output()
  createNote = new EventEmitter<Note>();

  constructor(private readonly noteService: NoteService, private readonly router: Router) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitting', this.note);

    this.noteService.createNote(this.note)
      .subscribe(createdNote => {
        console.log('created', createdNote);
        this.note = new Note();
        form.reset();

        this.router.navigateByUrl('/');
      });
  }

}
