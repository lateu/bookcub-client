import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './component/club/club.component';
import { RegisterComponent } from './component/register/register.component';
import { NewEntryComponent } from './component/new-entry/new-entry.component';
import { MessageEditorComponent } from './component/message-editor/message-editor.component';

const routes: Routes = [
  {
    path:'', component:ClubComponent
  },
  {
    path:'club', component:ClubComponent
  },
  {
    path:'journal',component:RegisterComponent
  },
  {
    path:'registration', component:NewEntryComponent
  },
  {
    path:'message-editor', component:MessageEditorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
