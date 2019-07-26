import { Note } from '../models';

export const NOTES: Note[] = [
  {
    id: randomId(),
    content: 'this is a note'
  },
  {
    id: randomId(),
    content: 'another note'
  },
  {
    id: randomId(),
    content: 'angular is tedious'
  },
  {
    id: randomId(),
    content: 'you cannot import what you do not export'
  },
  {
    id: randomId(),
    content: 'and vice versa'
  },
];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
