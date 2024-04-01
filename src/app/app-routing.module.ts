import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './component/club/club.component';
import { RegisterComponent } from './component/register/register.component';
import { NewEntryComponent } from './component/new-entry/new-entry.component';
import { MessageEditorComponent } from './component/message-editor/message-editor.component';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [
  {
    path:'', component:WelcomeComponent
  },
  {
    path:'add-club', component:ClubComponent
  },
  {
    path:'list-clubs', component:ListClubsComponent
  },
  {
    path: 'edit-club/:_id',  component: ClubComponent
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
