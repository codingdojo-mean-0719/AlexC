import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListComponent } from './notes';
import { NoteNewComponent } from './notes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
