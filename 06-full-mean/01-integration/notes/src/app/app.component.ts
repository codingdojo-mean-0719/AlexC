import { Component } from '@angular/core';
import { Note } from './models';
import { NOTES } from './data';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // note = new Note();
  // notes: Note[] = NOTES;

  // onSubmit(event: Event, form: NgForm) {
  //   event.preventDefault();

  //   console.log('submitting', this.note);

  //   this.notes.push(this.note);

  //   this.note = new Note();

  //   console.log(this.notes);

  //   form.reset();
  // }
}

