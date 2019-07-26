import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { NOTES } from '../data';

import { Note } from '../models';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
 // private readonly base = 'NOTES';
 private readonly notes: Note[] = NOTES;

  constructor(private readonly http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notes);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notes, note);
  }
}
