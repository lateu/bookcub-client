import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './component/club/club.component';
import { RegisterComponent } from './component/register/register.component';
import { NewEntryComponent } from './component/new-entry/new-entry.component';
import { MessageEditorComponent } from './component/message-editor/message-editor.component';
import { ListClubsComponent } from './component/list-clubs/list-clubs.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ClubDetailsComponent } from './component/club-details/club-details.component';

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
    path: 'clubdetail',  component: ClubDetailsComponent
  },
  {
    path:'registration',component:RegisterComponent
  },

  {
    path:'journal',component:NewEntryComponent
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
